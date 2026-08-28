import { API_BASE_URL } from './api';

const VAPID_PUBLIC_KEY = (import.meta as any).env.VITE_VAPID_PUBLIC_KEY || 'BNQH8Vc-EC2dRUAMABj5VaC7O1Sv0lnNiQ1ECZTBmFtXhmzdXBArPdUqt9rIgSc3uk0s0q0-MPjVhtVGzELy6Gs';

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export const isPushNotificationSupported = () => {
  return 'serviceWorker' in navigator && 'PushManager' in window;
};

export const getNotificationPermissionState = (): NotificationPermission => {
  if (!('Notification' in window)) return 'denied';
  return Notification.permission;
};

export const subscribeUserToPush = async (token: string): Promise<boolean> => {
  if (!isPushNotificationSupported()) {
    console.warn('Push notifications are not supported on this device.');
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    
    // Check if subscription already exists
    let subscription = await registration.pushManager.getSubscription();
    
    if (!subscription) {
      const convertedVapidKey = urlBase64ToUint8Array(VAPID_PUBLIC_KEY);
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: convertedVapidKey
      });
    }

    // Send subscription to backend
    const response = await fetch(`${API_BASE_URL}/auth/push-subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(subscription)
    });

    if (!response.ok) {
      throw new Error('Failed to register subscription on backend.');
    }

    console.log('[PUSH] Dispositivo registrato per le notifiche push.');
    return true;
  } catch (error) {
    console.error('[PUSH] Errore durante la registrazione delle notifiche:', error);
    return false;
  }
};

export const unsubscribeUserFromPush = async (token: string): Promise<boolean> => {
  if (!isPushNotificationSupported()) return false;

  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();

    if (subscription) {
      // Send unsubscribe request to backend
      await fetch(`${API_BASE_URL}/auth/push-unsubscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ endpoint: subscription.endpoint })
      });

      // Unsubscribe locally
      await subscription.unsubscribe();
    }

    console.log('[PUSH] Dispositivo rimosso dalle notifiche push.');
    return true;
  } catch (error) {
    console.error('[PUSH] Errore durante la disattivazione delle notifiche:', error);
    return false;
  }
};
