import { Router } from 'express';
import { register, login, me, socialLoginSimulation, verifyEmail, sendOtp, verifyOtp, checkVerificationStatus, pushSubscribe, pushUnsubscribe } from '../controllers/authController';
import { authenticateToken } from '../middleware/auth';
import { registerLimiter, loginLimiter, sendOtpLimiter, verifyOtpLimiter } from '../middleware/rateLimiter';

const router = Router();

router.post('/register', registerLimiter, register);
router.post('/login', loginLimiter, login);
router.get('/verify-email', verifyEmail);
router.get('/me', authenticateToken as any, me as any);
router.post('/social-login', socialLoginSimulation);
router.post('/send-otp', sendOtpLimiter, sendOtp);
router.post('/verify-otp', verifyOtpLimiter, verifyOtp);
router.get('/verification-status', checkVerificationStatus);

// Push Notifications subscription routes
router.post('/push-subscribe', authenticateToken as any, pushSubscribe as any);
router.post('/push-unsubscribe', authenticateToken as any, pushUnsubscribe as any);

export default router;
