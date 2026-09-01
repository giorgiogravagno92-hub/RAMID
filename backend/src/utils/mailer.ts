import nodemailer from 'nodemailer';

const smtpHost = process.env.SMTP_HOST;
const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom = process.env.SMTP_FROM || '"Ramid" <no-reply@ramid.it>';
const resendApiKey = process.env.RESEND_API_KEY;
const brevoApiKey = process.env.BREVO_API_KEY;
const brevoSenderEmail = process.env.BREVO_SENDER_EMAIL || smtpUser || 'giovanni.florio92@gmail.com';
const brevoSenderName = process.env.BREVO_SENDER_NAME || 'Ramid';

let transporter: nodemailer.Transporter | null = null;

if (brevoApiKey) {
  console.log(`[MAILER] API Brevo rilevata. Verrà utilizzato l'invio tramite API Brevo HTTPS da: ${brevoSenderEmail}`);
} else if (resendApiKey) {
  console.log('[MAILER] API Resend rilevata. Verrà utilizzato l\'invio tramite API HTTPS (Porta 443).');
} else if (smtpHost && smtpUser && smtpPass) {
  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
  console.log(`[MAILER] Transporter SMTP configurato con successo per ${smtpHost}:${smtpPort}`);
} else {
  console.warn('[MAILER] Nessun mittente email configurato. Le email verranno stampate solo sulla console del server.');
}

export const sendVerificationEmail = async (toEmail: string, verificationLink: string) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <h2 style="color: #0284c7; text-align: center;">Benvenuto su Ramid!</h2>
      <p>Grazie per esserti registrato sulla nostra piattaforma. Per completare la registrazione e attivare il tuo account, clicca sul pulsante sottostante:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${verificationLink}" style="background-color: #0284c7; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Verifica il tuo Account</a>
      </div>
      <p>Se il pulsante non funziona, copia e incolla questo indirizzo nel tuo browser:</p>
      <p style="word-break: break-all; color: #64748b;"><a href="${verificationLink}">${verificationLink}</a></p>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
      <p style="font-size: 0.8rem; color: #94a3b8; text-align: center;">Se non hai richiesto tu questa registrazione, puoi ignorare questa email.</p>
    </div>
  `;

  // 1. If Brevo API Key is configured (Preferred: allows sending to ANY recipient with free verified sender)
  if (brevoApiKey) {
    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': brevoApiKey,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          sender: {
            name: brevoSenderName,
            email: brevoSenderEmail
          },
          to: [
            { email: toEmail }
          ],
          subject: 'Verifica il tuo Account - Ramid',
          htmlContent: htmlContent
        })
      });

      if (response.ok) {
        console.log(`[MAILER - BREVO] Email di verifica inviata con successo a ${toEmail} da ${brevoSenderEmail}`);
        return;
      } else {
        const errData = await response.json();
        throw new Error(JSON.stringify(errData));
      }
    } catch (error: any) {
      console.error(`[MAILER - BREVO] Errore durante l'invio via Brevo a ${toEmail}:`, error.message);
      console.log(`[FALLBACK MAILER] Link di attivazione per ${toEmail}: ${verificationLink}`);
      return;
    }
  }

  // 2. If Resend API Key is configured, send via secure HTTPS API (Port 443)
  if (resendApiKey) {
    try {
      const fromSender = process.env.RESEND_FROM || 'onboarding@resend.dev';
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: fromSender,
          to: toEmail,
          subject: 'Verifica il tuo Account - Ramid',
          html: htmlContent
        })
      });

      if (response.ok) {
        console.log(`[MAILER - RESEND] Email di verifica inviata con successo a ${toEmail}`);
        return;
      } else {
        const errData = await response.json();
        throw new Error(JSON.stringify(errData));
      }
    } catch (error: any) {
      console.error(`[MAILER - RESEND] Errore durante l'invio via Resend a ${toEmail}:`, error.message);
      console.log(`[FALLBACK MAILER] Link di attivazione per ${toEmail}: ${verificationLink}`);
      return;
    }
  }

  // 3. Fallback to standard SMTP if configured
  if (transporter) {
    try {
      await transporter.sendMail({
        from: smtpFrom,
        to: toEmail,
        subject: 'Verifica il tuo Account - Ramid',
        html: htmlContent
      });
      console.log(`[MAILER - SMTP] Email di verifica inviata con successo a ${toEmail}`);
    } catch (error) {
      console.error(`[MAILER - SMTP] Errore durante l'invio dell'email a ${toEmail}:`, error);
      console.log(`[FALLBACK MAILER] Link di attivazione per ${toEmail}: ${verificationLink}`);
    }
  } else {
    console.log(`[MAILER - SIMULAZIONE] Link di attivazione per ${toEmail}: ${verificationLink}`);
  }
};
