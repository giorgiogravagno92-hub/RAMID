import { Router } from 'express';
import { register, login, me, socialLoginSimulation, verifyEmail } from '../controllers/authController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/verify-email', verifyEmail);
router.get('/me', authenticateToken as any, me as any);
router.post('/social-login', socialLoginSimulation);

export default router;
