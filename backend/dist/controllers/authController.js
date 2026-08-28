"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkVerificationStatus = exports.verifyOtp = exports.sendOtp = exports.verifyEmail = exports.socialLoginSimulation = exports.me = exports.login = exports.register = exports.otpStore = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../prisma"));
const mailer_1 = require("../utils/mailer");
const JWT_SECRET = process.env.JWT_SECRET;
// In-memory store for simulated OTPs
exports.otpStore = new Map();
const register = async (req, res) => {
    try {
        const { email, role, profileData } = req.body;
        let { password } = req.body;
        const isPersonaFisica = role === 'COMPANY' && profileData?.companyType === 'PERSONA_FISICA';
        if (isPersonaFisica && !password) {
            password = 'OtpRecruiter2026!'; // secure default password
        }
        if (!email || !password || !role) {
            return res.status(400).json({ error: 'Email, password and role are required' });
        }
        // Verify OTP for Persona Fisica recruiter registration
        if (isPersonaFisica) {
            const enteredOtp = profileData?.otpCode;
            const savedOtpData = exports.otpStore.get(email);
            if (!enteredOtp) {
                return res.status(400).json({ error: 'Codice OTP richiesto per completare la registrazione.' });
            }
            if (!savedOtpData || savedOtpData.code !== enteredOtp || savedOtpData.expires < Date.now()) {
                return res.status(400).json({ error: 'Codice OTP non valido o scaduto.' });
            }
            // Clean up OTP
            exports.otpStore.delete(email);
        }
        else {
            // Validate password for regular registrations
            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
            if (!passwordRegex.test(password)) {
                return res.status(400).json({ error: 'La password deve contenere almeno 8 caratteri, una lettera maiuscola, un numero e un simbolo.' });
            }
        }
        if (!['WORKER', 'COMPANY', 'ADMIN'].includes(role)) {
            return res.status(400).json({ error: 'Invalid role' });
        }
        // Enforce PEC email domain check for Company (Azienda or Persona Fisica)
        if (role === 'COMPANY') {
            const emailLower = email.toLowerCase();
            const domain = emailLower.split('@')[1];
            const validPecDomains = new Set([
                'pec.it',
                'arubapec.it',
                'mypec.eu',
                'gigapec.it',
                'pec.cloud',
                'legalmail.it',
                'pec.infocert.it',
                'cert.legalmail.it',
                'postecert.it',
                'sicurezzapostale.it',
                'namirialpec.it',
                'sicurezzainformatica.net',
                'pec.namirial.it',
                'pec.net',
                'interfreepec.it',
                'timpec.it',
                'pec.telecomitalia.it',
                'actalispec.it',
                'pec.actalis.it',
                'pec.intesigroup.com',
                'pec.buffetti.it',
                'pecmail.net',
                'pec.kpnqwest.it',
                'kpnpec.it',
                'pec.cedacri.it',
                'postacertificata.notariato.it',
                'pec.bancaditalia.it'
            ]);
            const isPec = domain && (validPecDomains.has(domain) || domain.split('.').includes('pec'));
            if (!isPec) {
                return res.status(400).json({ error: 'Indirizzo PEC non valido.' });
            }
        }
        // Check if user already exists
        const existingUser = await prisma_1.default.user.findUnique({ where: { email } });
        if (existingUser) {
            if (!existingUser.emailVerified) {
                console.log(`[REGISTER] Rilevato utente non verificato per ${email}. Rimozione per permettere nuova registrazione.`);
                await prisma_1.default.user.delete({ where: { email } });
            }
            else {
                return res.status(400).json({ error: 'Un utente con questo indirizzo email/PEC è già registrato.' });
            }
        }
        // Hash password
        const passwordHash = await bcryptjs_1.default.hash(password, 10);
        // Create user and profile transactionally
        const { newUser, companyProfile } = await prisma_1.default.$transaction(async (tx) => {
            const newUser = await tx.user.create({
                data: {
                    email,
                    passwordHash,
                    role,
                    emailVerified: isPersonaFisica ? true : false
                }
            });
            let wp = null;
            let cp = null;
            if (role === 'WORKER') {
                wp = await tx.workerProfile.create({
                    data: {
                        userId: newUser.id,
                        firstName: profileData?.firstName || 'Nuovo',
                        lastName: profileData?.lastName || 'Candidato',
                        city: profileData?.city || '',
                        province: profileData?.province || '',
                        sigla: profileData?.sigla || '',
                        region: profileData?.region || '',
                        profession: profileData?.profession || '',
                        skills: profileData?.skills || 'Nessuna',
                        educationLevel: profileData?.educationLevel || 'NESSUNO',
                        educationTitles: profileData?.educationTitles || '[]',
                        availabilityStatus: 'NON_DISPONIBILE',
                        desiredContract: profileData?.desiredContract || 'TEMPO_INDETERMINATO'
                    }
                });
                if (Array.isArray(profileData?.workExperiences)) {
                    for (const exp of profileData.workExperiences) {
                        await tx.workExperience.create({
                            data: {
                                workerProfileId: wp.id,
                                companyName: exp.companyName,
                                role: exp.role,
                                startDate: exp.startDate,
                                endDate: exp.endDate || null,
                                description: exp.description || '',
                                city: exp.city || null,
                                province: exp.province || null,
                                sigla: exp.sigla || null
                            }
                        });
                    }
                }
            }
            else if (role === 'COMPANY') {
                cp = await tx.companyProfile.create({
                    data: {
                        userId: newUser.id,
                        companyType: profileData?.companyType || 'AZIENDA',
                        companyName: isPersonaFisica ? `${profileData.firstName} ${profileData.lastName}` : (profileData?.companyName || 'Nuova Azienda'),
                        firstName: isPersonaFisica ? profileData.firstName : null,
                        lastName: isPersonaFisica ? profileData.lastName : null,
                        fiscalCode: isPersonaFisica ? (profileData?.fiscalCode || null) : null,
                        address: profileData?.address || null,
                        city: profileData?.city || null,
                        province: profileData?.province || null,
                        sigla: profileData?.sigla || null,
                        industry: isPersonaFisica ? 'Persona Fisica' : (profileData?.sector || profileData?.industry || 'Altro'),
                        contactPerson: isPersonaFisica ? `${profileData.firstName} ${profileData.lastName}` : (profileData?.companyName || 'Referente'),
                        contactPhone: profileData?.contactPhone || null
                    }
                });
            }
            return { newUser, workerProfile: wp, companyProfile: cp };
        });
        if (isPersonaFisica) {
            const token = jsonwebtoken_1.default.sign({ id: newUser.id, email: newUser.email, role: newUser.role }, JWT_SECRET, { expiresIn: '7d' });
            return res.status(201).json({
                token,
                user: {
                    id: newUser.id,
                    email: newUser.email,
                    role: newUser.role,
                    profile: companyProfile
                }
            });
        }
        const backendUrl = process.env.BACKEND_URL || `http://${req.get('host') || '192.168.1.58:5000'}`;
        const activationLink = `${backendUrl}/api/auth/verify-email?email=${encodeURIComponent(newUser.email)}`;
        (0, mailer_1.sendVerificationEmail)(newUser.email, activationLink).catch(err => {
            console.error('[BACKGROUND MAILER ERROR]:', err);
        });
        const registrationToken = Math.floor(100000 + Math.random() * 900000).toString();
        exports.otpStore.set(`reg-${newUser.email}`, { code: registrationToken, expires: Date.now() + 15 * 60 * 1000 });
        return res.status(201).json({
            emailVerificationRequired: true,
            email: newUser.email,
            registrationToken
        });
    }
    catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal server error during registration' });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password, vatNumber } = req.body;
        if (!email && !vatNumber) {
            return res.status(400).json({ error: 'PEC (Email) o Partita IVA obbligatori.' });
        }
        if (!password) {
            return res.status(400).json({ error: 'La password è obbligatoria.' });
        }
        let user = null;
        if (email) {
            user = await prisma_1.default.user.findFirst({
                where: { email },
                include: {
                    workerProfile: true,
                    companyProfile: true
                }
            });
        }
        if (!user && vatNumber) {
            // Find company by vatNumber (partita iva)
            const cleanVat = vatNumber.toUpperCase().startsWith('IT') ? vatNumber : 'IT' + vatNumber;
            const profile = await prisma_1.default.companyProfile.findFirst({
                where: { vatNumber: cleanVat },
                include: {
                    user: {
                        include: {
                            workerProfile: true,
                            companyProfile: true
                        }
                    }
                }
            });
            if (profile) {
                user = profile.user;
            }
        }
        if (!user) {
            return res.status(401).json({ error: 'Credenziali non valide.' });
        }
        if (!user.emailVerified) {
            return res.status(403).json({ error: 'Account non verificato. Clicca sul link di autorizzazione inviato alla tua email per completare la registrazione.' });
        }
        const passwordValid = await bcryptjs_1.default.compare(password, user.passwordHash);
        if (!passwordValid) {
            return res.status(401).json({ error: 'Credenziali non valide.' });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                profile: user.role === 'WORKER' ? user.workerProfile : user.companyProfile
            }
        });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error during login' });
    }
};
exports.login = login;
const me = async (req, res) => {
    try {
        const user = await prisma_1.default.user.findUnique({
            where: { id: req.user.id },
            include: {
                workerProfile: true,
                companyProfile: true
            }
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({
            id: user.id,
            email: user.email,
            role: user.role,
            profile: user.role === 'WORKER' ? user.workerProfile : user.companyProfile
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.me = me;
const socialLoginSimulation = async (req, res) => {
    try {
        const { email, name, provider, role } = req.body; // provider: 'google' or 'apple'
        if (!email || !role) {
            return res.status(400).json({ error: 'Email and role are required' });
        }
        let user = await prisma_1.default.user.findUnique({
            where: { email },
            include: {
                workerProfile: true,
                companyProfile: true
            }
        });
        if (!user) {
            // Create user with simulated social password
            const passwordHash = await bcryptjs_1.default.hash(`social-login-${provider}-${Math.random()}`, 10);
            const parts = name ? name.split(' ') : ['Nuovo', 'Utente'];
            const firstName = parts[0];
            const lastName = parts.slice(1).join(' ') || 'Utente';
            user = await prisma_1.default.$transaction(async (tx) => {
                const newUser = await tx.user.create({
                    data: {
                        email,
                        passwordHash,
                        role
                    }
                });
                if (role === 'WORKER') {
                    await tx.workerProfile.create({
                        data: {
                            userId: newUser.id,
                            firstName,
                            lastName,
                            city: 'Milano',
                            province: 'MI',
                            region: 'Lombardia',
                            profession: 'Sviluppatore Web',
                            skills: 'HTML, CSS, JavaScript, React',
                            availabilityStatus: 'NON_DISPONIBILE',
                            desiredContract: 'TEMPO_INDETERMINATO'
                        }
                    });
                }
                else if (role === 'COMPANY') {
                    await tx.companyProfile.create({
                        data: {
                            userId: newUser.id,
                            companyName: name || 'Nuova Azienda Social',
                            industry: 'Tecnologia',
                            city: 'Milano',
                            contactPerson: name || 'Referente'
                        }
                    });
                }
                return tx.user.findUnique({
                    where: { id: newUser.id },
                    include: {
                        workerProfile: true,
                        companyProfile: true
                    }
                });
            });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                profile: user.role === 'WORKER' ? user.workerProfile : user.companyProfile
            }
        });
    }
    catch (error) {
        console.error('Social login error:', error);
        res.status(500).json({ error: 'Internal server error during social login simulation' });
    }
};
exports.socialLoginSimulation = socialLoginSimulation;
const verifyEmail = async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).send('<h1>Errore</h1><p>Email mancante.</p>');
        }
        const user = await prisma_1.default.user.findUnique({ where: { email: String(email) } });
        if (!user) {
            return res.status(404).send('<h1>Errore</h1><p>Utente non trovato.</p>');
        }
        const updatedUser = await prisma_1.default.user.update({
            where: { email: String(email) },
            data: { emailVerified: true },
            include: {
                workerProfile: true,
                companyProfile: true
            }
        });
        const token = jsonwebtoken_1.default.sign({ id: updatedUser.id, email: updatedUser.email, role: updatedUser.role }, JWT_SECRET, { expiresIn: '7d' });
        const userData = {
            id: updatedUser.id,
            email: updatedUser.email,
            role: updatedUser.role,
            profile: updatedUser.role === 'WORKER' ? updatedUser.workerProfile : updatedUser.companyProfile
        };
        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
        const redirectUrl = `${frontendUrl}/?token=${encodeURIComponent(token)}&user=${encodeURIComponent(JSON.stringify(userData))}`;
        res.send(`
      <html>
        <head>
          <title>Email Verificata - Ramid</title>
          <meta http-equiv="refresh" content="3;url=${redirectUrl}" />
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f172a; color: #f8fafc; text-align: center; padding: 50px; }
            .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 40px; max-width: 500px; margin: 0 auto; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5); backdrop-filter: blur(10px); }
            h1 { color: #3b82f6; margin-bottom: 20px; }
            p { font-size: 1.1rem; line-height: 1.6; color: #94a3b8; }
            .badge { background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); color: #10b981; padding: 6px 12px; border-radius: 20px; font-weight: bold; font-size: 0.9rem; display: inline-block; margin-bottom: 20px; }
            .btn { display: inline-block; margin-top: 25px; background: #3b82f6; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; transition: background 0.2s; }
            .btn:hover { background: #2563eb; }
            .countdown { font-size: 0.9rem; color: #64748b; margin-top: 15px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="badge">CONFERMATO</div>
            <h1>Email Verificata con Successo!</h1>
            <p>Il tuo account è stato autorizzato correttamente.</p>
            <p class="countdown">Verrai reindirizzato all'interno dell'applicazione tra pochi secondi...</p>
            <a href="${redirectUrl}" class="btn">Entra nell'App</a>
          </div>
          <script>
            setTimeout(function() {
              window.location.href = "${redirectUrl}";
            }, 3000);
          </script>
        </body>
      </html>
    `);
    }
    catch (error) {
        console.error('Email verification error:', error);
        res.status(500).send('<h1>Errore</h1><p>Errore interno del server durante la verifica.</p>');
    }
};
exports.verifyEmail = verifyEmail;
const sendOtp = async (req, res) => {
    try {
        const { email, phone, isRegistration, firstName, lastName, fiscalCode } = req.body;
        if (isRegistration) {
            if (!email) {
                return res.status(400).json({ error: 'Indirizzo email obbligatorio per la registrazione.' });
            }
            const code = Math.floor(100000 + Math.random() * 900000).toString();
            const expires = Date.now() + 10 * 60 * 1000;
            exports.otpStore.set(email, { code, expires });
            console.log(`[SIMULATORE OTP] Codice per ${email}: ${code}`);
            return res.json({ success: true, code });
        }
        // Login flow: find user by email OR by Persona Fisica details
        let user = null;
        let userEmail = email;
        if (email) {
            user = await prisma_1.default.user.findUnique({
                where: { email },
                include: { companyProfile: true }
            });
        }
        else {
            // Find by Persona Fisica details
            if (!firstName || !lastName || !fiscalCode || !phone) {
                return res.status(400).json({ error: 'Nome, Cognome, Codice Fiscale e Cellulare sono richiesti.' });
            }
            const profiles = await prisma_1.default.companyProfile.findMany({
                where: {
                    companyType: 'PERSONA_FISICA',
                    contactPhone: phone
                },
                include: { user: true }
            });
            const match = profiles.find(p => p.firstName?.toLowerCase() === firstName.toLowerCase() &&
                p.lastName?.toLowerCase() === lastName.toLowerCase() &&
                p.fiscalCode?.toLowerCase() === fiscalCode.toLowerCase());
            if (match) {
                user = match.user;
                userEmail = user.email;
            }
        }
        if (!user) {
            return res.status(404).json({ error: 'Nessun utente registrato corrisponde ai dati inseriti.' });
        }
        if (user.role !== 'COMPANY' || user.companyProfile?.companyType !== 'PERSONA_FISICA') {
            return res.status(400).json({ error: 'Questo account non è abilitato all\'accesso rapido OTP.' });
        }
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const expires = Date.now() + 10 * 60 * 1000;
        exports.otpStore.set(userEmail, { code, expires });
        console.log(`[SIMULATORE OTP] Codice per ${userEmail} (tel: ${phone}): ${code}`);
        res.json({
            success: true,
            message: `Codice OTP inviato (Simulato)`,
            code,
            email: userEmail
        });
    }
    catch (error) {
        console.error('Error in sendOtp:', error);
        res.status(500).json({ error: 'Errore durante l\'invio del codice OTP.' });
    }
};
exports.sendOtp = sendOtp;
const verifyOtp = async (req, res) => {
    try {
        const { email, code } = req.body;
        if (!email || !code) {
            return res.status(400).json({ error: 'Email e codice OTP sono richiesti.' });
        }
        const savedOtpData = exports.otpStore.get(email);
        if (!savedOtpData || savedOtpData.code !== code || savedOtpData.expires < Date.now()) {
            return res.status(400).json({ error: 'Codice OTP non valido o scaduto.' });
        }
        // OTP is valid, clean up
        exports.otpStore.delete(email);
        // Fetch user
        const user = await prisma_1.default.user.findUnique({
            where: { email },
            include: { companyProfile: true }
        });
        if (!user) {
            return res.status(404).json({ error: 'Utente non trovato.' });
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                profile: user.companyProfile
            }
        });
    }
    catch (error) {
        console.error('Error in verifyOtp:', error);
        res.status(500).json({ error: 'Errore durante la verifica dell\'OTP.' });
    }
};
exports.verifyOtp = verifyOtp;
const checkVerificationStatus = async (req, res) => {
    try {
        const { email, token } = req.query;
        if (!email || !token) {
            return res.status(400).json({ error: 'Email e token richiesti.' });
        }
        const otpEntry = exports.otpStore.get(`reg-${email}`);
        if (!otpEntry || otpEntry.code !== token) {
            return res.status(401).json({ error: 'Token non valido o scaduto.' });
        }
        const user = await prisma_1.default.user.findUnique({
            where: { email: String(email) },
            include: {
                workerProfile: true,
                companyProfile: true
            }
        });
        if (!user) {
            return res.status(404).json({ error: 'Utente non trovato.' });
        }
        if (user.emailVerified) {
            // Clear the temporary code
            exports.otpStore.delete(`reg-${email}`);
            // Generate JWT token
            const jwtToken = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
            return res.json({
                verified: true,
                token: jwtToken,
                user: {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    profile: user.role === 'WORKER' ? user.workerProfile : user.companyProfile
                }
            });
        }
        return res.json({ verified: false });
    }
    catch (error) {
        console.error('Error in checkVerificationStatus:', error);
        res.status(500).json({ error: 'Errore interno del server.' });
    }
};
exports.checkVerificationStatus = checkVerificationStatus;
