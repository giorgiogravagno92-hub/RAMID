import webpush from 'web-push';
import prisma from '../prisma';

const vapidPublicKey = process.env.VAPID_PUBLIC_KEY;
const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY;
const vapidEmail = process.env.VAPID_EMAIL || 'giovanni.florio92@gmail.com';

if (vapidPublicKey && vapidPrivateKey) {
  const mailtoUri = vapidEmail.startsWith('mailto:') ? vapidEmail : `mailto:${vapidEmail}`;
  webpush.setVapidDetails(
    mailtoUri,
    vapidPublicKey,
    vapidPrivateKey
  );
  console.log('[PUSH] Web Push configurato con successo.');
} else {
  console.warn('[PUSH] VAPID keys non configurate. Le notifiche push non verranno inviate.');
}

export const sendPushNotification = async (userId: string, title: string, body: string, url?: string) => {
  if (!vapidPublicKey || !vapidPrivateKey) {
    console.log('[PUSH - SIMULAZIONE] VAPID non configurato. Notifica push simulata:', { userId, title, body, url });
    return;
  }

  try {
    const subscriptions = await prisma.pushSubscription.findMany({
      where: { userId }
    });

    if (subscriptions.length === 0) {
      console.log(`[PUSH] Nessun dispositivo registrato per l'utente ${userId}.`);
      return;
    }

    const payload = JSON.stringify({
      title,
      body,
      url: url || '/'
    });

    console.log(`[PUSH] Invio di ${subscriptions.length} notifiche push per l'utente ${userId}...`);

    const promises = subscriptions.map(async (sub) => {
      const pushSub = {
        endpoint: sub.endpoint,
        keys: {
          p256dh: sub.p256dh,
          auth: sub.auth
        }
      };

      try {
        await webpush.sendNotification(pushSub, payload);
      } catch (err: any) {
        // If subscription is 410 (Gone) or 404 (Not Found), it means the browser unregistered it
        if (err.statusCode === 410 || err.statusCode === 404) {
          console.log(`[PUSH] Sottoscrizione non più valida (410/404). Rimozione: ${sub.endpoint}`);
          try {
            await prisma.pushSubscription.delete({
              where: { id: sub.id }
            });
          } catch (deleteErr) {}
        } else {
          console.error('[PUSH] Errore invio a endpoint:', err.message || err);
        }
      }
    });

    await Promise.all(promises);
  } catch (error: any) {
    console.error('[PUSH] Errore generale durante invio push:', error.message || error);
  }
};
