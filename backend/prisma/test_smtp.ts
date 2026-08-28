import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const smtpHost = process.env.SMTP_HOST;
const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

async function main() {
  console.log('Testing SMTP connection with settings:');
  console.log(`- Host: ${smtpHost}`);
  console.log(`- Port: ${smtpPort}`);
  console.log(`- User: ${smtpUser}`);
  console.log(`- Pass configured: ${smtpPass ? 'YES' : 'NO'}`);

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error('❌ Error: SMTP variables are missing or not configured in .env!');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.verify();
    console.log('✅ SMTP connection successful!');
  } catch (err: any) {
    console.error('❌ SMTP connection failed!');
    console.error('Error code:', err.code);
    console.error('Error message:', err.message);
  }
}

main();
