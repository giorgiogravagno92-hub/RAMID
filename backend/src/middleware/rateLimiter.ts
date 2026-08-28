import rateLimit from 'express-rate-limit';

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuti
  max: 5, // Limite di 5 richieste per IP
  message: {
    error: 'Troppi tentativi di login. Riprova tra 15 minuti.'
  },
  standardHeaders: true, // Ritorna le informazioni sul limite negli header RateLimit-*
  legacyHeaders: false, // Disabilita gli header X-RateLimit-* obsoleti
});

export const sendOtpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuti
  max: 3, // Limite di 3 richieste per IP
  message: {
    error: 'Hai richiesto troppi codici OTP. Riprova tra 15 minuti.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const verifyOtpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuti
  max: 5, // Limite di 5 richieste per IP
  message: {
    error: 'Troppi tentativi di verifica codice. Riprova tra 15 minuti.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 ora
  max: 5, // Limite di 5 registrazioni per IP
  message: {
    error: 'Troppe registrazioni effettuate da questo indirizzo. Riprova tra un\'ora.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});
