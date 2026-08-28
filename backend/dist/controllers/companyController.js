"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadIdDocument = exports.deleteProposal = exports.updateProposal = exports.getProposals = exports.createProposal = exports.updateCompanyProfile = exports.requestInterview = exports.getFavorites = exports.toggleFavorite = exports.getWorkerDetails = exports.updateProfile = exports.getProfile = exports.searchWorkers = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const pushService_1 = require("../utils/pushService");
const searchWorkers = async (req, res) => {
    try {
        const { profession, city, province, region, availabilityStatus, skills, hasLicense, hasCar, desiredContract, educationLevel, educationField } = req.query;
        const whereClause = {};
        if (availabilityStatus) {
            // Map legacy status to the new DISPONIBILE_PROPOSTE
            const statusToQuery = (availabilityStatus === 'DISPONIBILE_SUBITO' || availabilityStatus === 'VALUTO_OFFERTE' || availabilityStatus === 'DISPONIBILE_PROPOSTE')
                ? 'DISPONIBILE_PROPOSTE'
                : availabilityStatus;
            whereClause.availabilityStatus = { equals: statusToQuery };
        }
        else {
            // By default, only search for candidates who have not explicitly set "NON_DISPONIBILE"
            whereClause.availabilityStatus = { not: 'NON_DISPONIBILE' };
        }
        if (hasLicense === 'true') {
            whereClause.hasLicense = true;
        }
        if (hasCar === 'true') {
            whereClause.hasCar = true;
        }
        let workers = await prisma_1.default.workerProfile.findMany({
            where: whereClause,
            include: {
                user: {
                    select: {
                        email: true
                    }
                }
            }
        });
        // In-memory filters for advanced regions/provinces, contracts, multiple educations, and multiple professions
        if (profession || region || province || city || desiredContract || educationLevel || educationField) {
            workers = workers.filter(worker => {
                // 0. Profession Match
                if (profession) {
                    const searchProf = String(profession).toLowerCase().trim();
                    const primaryMatch = worker.profession.toLowerCase().includes(searchProf);
                    let rolesMatch = false;
                    try {
                        const parsedRoles = JSON.parse(worker.availabilityRoles || '[]');
                        rolesMatch = parsedRoles.some((r) => r.toLowerCase().includes(searchProf));
                    }
                    catch (e) {
                        rolesMatch = false;
                    }
                    if (!primaryMatch && !rolesMatch) {
                        return false;
                    }
                }
                // 1. Region / Province / City Match
                let geoMatch = true;
                let preferredRegions = [];
                try {
                    preferredRegions = JSON.parse(worker.availabilityRegionsProvinces || '[]');
                }
                catch (e) {
                    preferredRegions = [];
                }
                // If the candidate has selected specific regions/provinces
                if (preferredRegions.length > 0) {
                    let matchesGeo = false;
                    // Check if "Tutte le regioni" is selected
                    const hasAllRegions = preferredRegions.some((r) => r.region === 'Tutte le regioni');
                    if (hasAllRegions) {
                        matchesGeo = true;
                    }
                    else {
                        // Check specific region/province
                        for (const r of preferredRegions) {
                            const regionName = r.region.toLowerCase();
                            // If searching region
                            if (region && regionName.includes(String(region).toLowerCase())) {
                                matchesGeo = true;
                                break;
                            }
                            // If searching province
                            if (province) {
                                const searchProv = String(province).toUpperCase().trim();
                                const provincesList = r.provinces || [];
                                const hasAllProvinces = provincesList.some((p) => p.name === 'Tutte le province');
                                if (hasAllProvinces) {
                                    matchesGeo = true;
                                    break;
                                }
                                const provinceMatch = provincesList.some((p) => {
                                    const pName = p.name.toUpperCase().trim();
                                    // Match by name or sigla (e.g. "RM", "ROMA")
                                    return pName.includes(searchProv) || searchProv.includes(pName);
                                });
                                if (provinceMatch) {
                                    matchesGeo = true;
                                    break;
                                }
                            }
                            // If searching city
                            if (city && worker.city.toLowerCase().includes(String(city).toLowerCase())) {
                                matchesGeo = true;
                                break;
                            }
                        }
                    }
                    if (!matchesGeo) {
                        geoMatch = false;
                    }
                }
                else {
                    // Fallback to candidate's home address
                    if (region && !worker.region.toLowerCase().includes(String(region).toLowerCase())) {
                        geoMatch = false;
                    }
                    if (province) {
                        const wProv = worker.province.toUpperCase().trim();
                        const sProv = String(province).toUpperCase().trim();
                        if (!wProv.includes(sProv) && !sProv.includes(wProv)) {
                            geoMatch = false;
                        }
                    }
                    if (city && !worker.city.toLowerCase().includes(String(city).toLowerCase())) {
                        geoMatch = false;
                    }
                }
                if (!geoMatch)
                    return false;
                // 2. Contract Match
                if (desiredContract) {
                    let preferredContracts = [];
                    try {
                        preferredContracts = JSON.parse(worker.availabilityContracts || '[]');
                    }
                    catch (e) {
                        preferredContracts = [];
                    }
                    if (preferredContracts.length > 0) {
                        // Check if "Nessuna preferenza" or candidate's list includes the desired contract
                        const hasNoPref = preferredContracts.includes('Nessuna preferenza') || preferredContracts.includes('NESSUNA_PREFERENZA');
                        const searchContractNorm = String(desiredContract).toUpperCase().replace('_', '').replace('-', '');
                        const matchContract = preferredContracts.some((c) => {
                            const cNorm = c.toUpperCase().replace('_', '').replace('-', '');
                            return cNorm.includes(searchContractNorm) || searchContractNorm.includes(cNorm);
                        });
                        if (!hasNoPref && !matchContract) {
                            return false;
                        }
                    }
                    else {
                        // Fallback to legacy desiredContract field
                        if (worker.desiredContract) {
                            const wNorm = worker.desiredContract.toUpperCase().replace('_', '').replace('-', '');
                            const sNorm = String(desiredContract).toUpperCase().replace('_', '').replace('-', '');
                            if (!wNorm.includes(sNorm) && !sNorm.includes(wNorm)) {
                                return false;
                            }
                        }
                    }
                }
                // 3. Education Match
                if (educationLevel) {
                    const isLaureaLevel = (lvl) => {
                        return lvl === 'LAUREA' || lvl === 'LAUREA_TRIENNALE' || lvl === 'LAUREA_SPECIALISTICA' || lvl === 'LAUREA_MAGISTRALE';
                    };
                    let hasEduLevel = false;
                    if (educationLevel === 'LAUREA') {
                        hasEduLevel = isLaureaLevel(worker.educationLevel);
                    }
                    else {
                        hasEduLevel = worker.educationLevel === educationLevel;
                    }
                    let preferredEducations = [];
                    try {
                        preferredEducations = JSON.parse(worker.educationTitles || '[]');
                    }
                    catch (e) { }
                    if (preferredEducations.length > 0) {
                        hasEduLevel = hasEduLevel || preferredEducations.some((e) => {
                            if (educationLevel === 'LAUREA') {
                                return isLaureaLevel(e.level);
                            }
                            return e.level === educationLevel;
                        });
                    }
                    if (!hasEduLevel) {
                        return false;
                    }
                }
                if (educationField) {
                    let hasEduField = worker.educationField && worker.educationField.toLowerCase().includes(String(educationField).toLowerCase());
                    let preferredEducations = [];
                    try {
                        preferredEducations = JSON.parse(worker.educationTitles || '[]');
                    }
                    catch (e) { }
                    if (preferredEducations.length > 0) {
                        hasEduField = hasEduField || preferredEducations.some((e) => e.field && e.field.toLowerCase().includes(String(educationField).toLowerCase()));
                    }
                    if (!hasEduField) {
                        return false;
                    }
                }
                return true;
            });
        }
        // Client-side filtering for skills if specified
        if (skills) {
            const searchSkills = String(skills)
                .split(',')
                .map((s) => s.trim().toLowerCase())
                .filter(Boolean);
            if (searchSkills.length > 0) {
                workers = workers.filter((worker) => {
                    try {
                        const parsed = JSON.parse(worker.skills);
                        const workerSkillsList = [];
                        if (parsed.computerSkills) {
                            workerSkillsList.push(...Object.keys(parsed.computerSkills));
                        }
                        if (parsed.organizationalSkills) {
                            workerSkillsList.push(...Object.keys(parsed.organizationalSkills));
                        }
                        return searchSkills.some((skill) => workerSkillsList.some(ws => ws.toLowerCase().includes(skill)));
                    }
                    catch (e) {
                        const workerSkills = worker.skills
                            .toLowerCase()
                            .split(',')
                            .map((s) => s.trim());
                        return searchSkills.some((skill) => workerSkills.includes(skill) || workerSkills.some(ws => ws.includes(skill)));
                    }
                });
            }
        }
        res.json(workers);
    }
    catch (error) {
        console.error('Error during candidate search:', error);
        res.status(500).json({ error: 'Error processing search' });
    }
};
exports.searchWorkers = searchWorkers;
const getProfile = async (req, res) => {
    try {
        const profile = await prisma_1.default.companyProfile.findUnique({
            where: { userId: req.user.id }
        });
        if (!profile) {
            return res.status(404).json({ error: 'Company profile not found' });
        }
        res.json(profile);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching profile' });
    }
};
exports.getProfile = getProfile;
const updateProfile = async (req, res) => {
    try {
        const { companyType, companyName, address, vatNumber, firstName, lastName, residenzaCapCitta, fiscalCode, industry, city, province, sigla, contactPerson, contactPhone, logoUrl } = req.body;
        const profile = await prisma_1.default.companyProfile.update({
            where: { userId: req.user.id },
            data: {
                companyType,
                companyName,
                address,
                vatNumber,
                firstName,
                lastName,
                residenzaCapCitta,
                fiscalCode,
                industry,
                city: companyType === 'AZIENDA' ? city : residenzaCapCitta,
                province,
                sigla,
                contactPerson: companyType === 'AZIENDA' ? contactPerson : `${firstName} ${lastName}`,
                contactPhone,
                logoUrl
            }
        });
        res.json(profile);
    }
    catch (error) {
        console.error('Error updating company profile:', error);
        res.status(500).json({ error: 'Error updating profile' });
    }
};
exports.updateProfile = updateProfile;
const getWorkerDetails = async (req, res) => {
    try {
        const { id } = req.params; // worker profile ID
        const worker = await prisma_1.default.workerProfile.findUnique({
            where: { id },
            include: {
                user: {
                    select: { email: true }
                },
                workExperiences: true
            }
        });
        if (!worker) {
            return res.status(404).json({ error: 'Worker not found' });
        }
        // Get company profile to customize notification
        const company = await prisma_1.default.companyProfile.findUnique({
            where: { userId: req.user.id }
        });
        const companyName = company ? company.companyName : "Un'azienda";
        // Simulate push notification by saving it to the worker's database notifications table
        await prisma_1.default.notification.create({
            data: {
                userId: worker.userId,
                title: 'Profilo Visualizzato',
                message: `${companyName} ha appena visualizzato il tuo profilo.`,
                type: 'PROFILE_VIEW'
            }
        });
        (0, pushService_1.sendPushNotification)(worker.userId, 'Profilo Visualizzato', `${companyName} ha appena visualizzato il tuo profilo.`, '/dashboard').catch(err => console.error('Push error:', err));
        res.json(worker);
    }
    catch (error) {
        console.error('Error fetching worker details:', error);
        res.status(500).json({ error: 'Error fetching details' });
    }
};
exports.getWorkerDetails = getWorkerDetails;
const toggleFavorite = async (req, res) => {
    try {
        const { workerId } = req.body;
        const company = await prisma_1.default.companyProfile.findUnique({
            where: { userId: req.user.id }
        });
        if (!company) {
            return res.status(404).json({ error: 'Company profile not found' });
        }
        const existingFavorite = await prisma_1.default.favorite.findUnique({
            where: {
                companyId_workerId: {
                    companyId: company.id,
                    workerId
                }
            }
        });
        if (existingFavorite) {
            // Remove favorite
            await prisma_1.default.favorite.delete({
                where: { id: existingFavorite.id }
            });
            res.json({ favorited: false });
        }
        else {
            // Add favorite
            await prisma_1.default.favorite.create({
                data: {
                    companyId: company.id,
                    workerId
                }
            });
            res.json({ favorited: true });
        }
    }
    catch (error) {
        console.error('Error toggling favorite:', error);
        res.status(500).json({ error: 'Error toggling favorite' });
    }
};
exports.toggleFavorite = toggleFavorite;
const getFavorites = async (req, res) => {
    try {
        const company = await prisma_1.default.companyProfile.findUnique({
            where: { userId: req.user.id }
        });
        if (!company) {
            return res.status(404).json({ error: 'Company profile not found' });
        }
        const favorites = await prisma_1.default.favorite.findMany({
            where: { companyId: company.id },
            include: {
                worker: true
            }
        });
        res.json(favorites.map(f => f.worker));
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching favorites' });
    }
};
exports.getFavorites = getFavorites;
const requestInterview = async (req, res) => {
    try {
        const { workerId, message, date } = req.body;
        const company = await prisma_1.default.companyProfile.findUnique({
            where: { userId: req.user.id }
        });
        if (!company) {
            return res.status(404).json({ error: 'Company profile not found' });
        }
        const worker = await prisma_1.default.workerProfile.findUnique({
            where: { id: workerId }
        });
        if (!worker) {
            return res.status(404).json({ error: 'Worker not found' });
        }
        const companyName = company.companyName || `${company.firstName} ${company.lastName}` || "Un'azienda";
        const interviewRequest = await prisma_1.default.interviewRequest.create({
            data: {
                companyId: company.id,
                workerId,
                message,
                interviewDate: date || new Date().toLocaleDateString('it-IT'),
                status: 'PENDING'
            }
        });
        // Notify the worker
        await prisma_1.default.notification.create({
            data: {
                userId: worker.userId,
                title: 'Proposta Iniziale',
                message: `${companyName} ti ha inviato una proposta iniziale.`,
                type: 'INTERVIEW_REQUEST'
            }
        });
        (0, pushService_1.sendPushNotification)(worker.userId, 'Proposta Iniziale', `${companyName} ti ha inviato una proposta iniziale.`, '/dashboard').catch(err => console.error('Push error:', err));
        res.json({ success: true, request: interviewRequest });
    }
    catch (error) {
        console.error('Error scheduling interview:', error);
        res.status(500).json({ error: 'Error creating interview request' });
    }
};
exports.requestInterview = requestInterview;
const updateCompanyProfile = async (req, res) => {
    try {
        const { companyType, companyName, address, vatNumber, firstName, lastName, residenzaCapCitta, fiscalCode, industry, city, province, sigla, contactPerson, contactPhone, idDocumentUrl } = req.body;
        const company = await prisma_1.default.companyProfile.update({
            where: { userId: req.user.id },
            data: {
                companyType,
                companyName,
                address,
                vatNumber,
                firstName,
                lastName,
                residenzaCapCitta,
                fiscalCode,
                industry,
                city,
                province,
                sigla,
                contactPerson,
                contactPhone,
                idDocumentUrl
            }
        });
        res.json(company);
    }
    catch (error) {
        console.error('Error updating company profile:', error);
        res.status(500).json({ error: 'Error updating company profile' });
    }
};
exports.updateCompanyProfile = updateCompanyProfile;
const createProposal = async (req, res) => {
    try {
        const company = await prisma_1.default.companyProfile.findUnique({
            where: { userId: req.user.id }
        });
        if (!company) {
            return res.status(404).json({ error: 'Company profile not found' });
        }
        const { professions, locations, educationTitle, hasLicense, hasCar, minSalary, maxSalary, notes, status, contractType } = req.body;
        let pContracts = [];
        try {
            pContracts = JSON.parse(contractType || '[]');
        }
        catch (e) {
            if (contractType && contractType !== 'Nessuna preferenza') {
                pContracts = [contractType];
            }
        }
        if (status !== 'DRAFT') {
            if (company.companyType === 'PERSONA_FISICA' && !company.idDocumentUrl) {
                return res.status(403).json({ error: 'Il caricamento del documento d\'identità è obbligatorio prima di poter pubblicare una proposta di lavoro.' });
            }
            if (pContracts.length === 0) {
                return res.status(400).json({ error: 'Seleziona almeno una tipologia di contratto offerto (massimo 2).' });
            }
            if (pContracts.length > 2) {
                return res.status(400).json({ error: 'Puoi selezionare al massimo 2 tipologie di contratto offerto.' });
            }
        }
        const profsArr = typeof professions === 'object' ? professions : JSON.parse(professions || '[]');
        const locsArr = typeof locations === 'object' ? locations : JSON.parse(locations || '[]');
        const proposalStatus = status === 'DRAFT' ? 'DRAFT' : 'ACTIVE';
        const proposal = await prisma_1.default.jobProposal.create({
            data: {
                companyId: company.id,
                professions: JSON.stringify(profsArr),
                locations: JSON.stringify(locsArr),
                educationTitle: educationTitle || 'Nessuna preferenza',
                hasLicense: false,
                hasCar: false,
                minSalary: minSalary || '',
                maxSalary: maxSalary || '',
                notes: notes || '',
                status: proposalStatus,
                contractType: contractType || 'Nessuna preferenza'
            }
        });
        if (proposal.status === 'ACTIVE') {
            await notifyMatchingWorkersOfProposal(proposal);
        }
        res.json(proposal);
    }
    catch (error) {
        console.error('Error creating proposal:', error);
        res.status(500).json({ error: 'Error creating job proposal' });
    }
};
exports.createProposal = createProposal;
const getProposals = async (req, res) => {
    try {
        const company = await prisma_1.default.companyProfile.findUnique({
            where: { userId: req.user.id }
        });
        if (!company) {
            return res.status(404).json({ error: 'Company profile not found' });
        }
        const proposals = await prisma_1.default.jobProposal.findMany({
            where: { companyId: company.id },
            include: {
                company: true,
                responses: {
                    include: {
                        worker: {
                            include: {
                                workExperiences: true,
                                user: {
                                    select: { email: true }
                                }
                            }
                        }
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
        res.json(proposals);
    }
    catch (error) {
        console.error('Error fetching proposals:', error);
        res.status(500).json({ error: 'Error fetching job proposals' });
    }
};
exports.getProposals = getProposals;
const updateProposal = async (req, res) => {
    try {
        const { id } = req.params;
        const { professions, locations, educationTitle, hasLicense, hasCar, minSalary, maxSalary, notes, status, contractType } = req.body;
        const company = await prisma_1.default.companyProfile.findUnique({
            where: { userId: req.user.id }
        });
        if (!company) {
            return res.status(404).json({ error: 'Company profile not found' });
        }
        if (status === 'ACTIVE') {
            if (company.companyType === 'PERSONA_FISICA' && !company.idDocumentUrl) {
                return res.status(403).json({ error: 'Il caricamento del documento d\'identità è obbligatorio prima di poter pubblicare una proposta di lavoro.' });
            }
        }
        let pContracts = [];
        try {
            pContracts = JSON.parse(contractType || '[]');
        }
        catch (e) {
            if (contractType && contractType !== 'Nessuna preferenza') {
                pContracts = [contractType];
            }
        }
        if (status !== 'DRAFT' && contractType !== undefined) {
            if (pContracts.length === 0) {
                return res.status(400).json({ error: 'Seleziona almeno una tipologia di contratto offerto (massimo 2).' });
            }
            if (pContracts.length > 2) {
                return res.status(400).json({ error: 'Puoi selezionare al massimo 2 tipologie di contratto offerto.' });
            }
        }
        const profsArr = typeof professions === 'object' ? professions : JSON.parse(professions || '[]');
        const locsArr = typeof locations === 'object' ? locations : JSON.parse(locations || '[]');
        const updateData = {
            professions: JSON.stringify(profsArr),
            locations: JSON.stringify(locsArr),
            educationTitle: educationTitle || 'Nessuna preferenza',
            hasLicense: false,
            hasCar: false,
            minSalary: minSalary || '',
            maxSalary: maxSalary || '',
            notes: notes || '',
            contractType: contractType || 'Nessuna preferenza'
        };
        if (status) {
            updateData.status = status;
        }
        const proposal = await prisma_1.default.jobProposal.update({
            where: { id },
            data: updateData,
            include: {
                company: true,
                responses: {
                    include: {
                        worker: {
                            include: {
                                workExperiences: true
                            }
                        }
                    }
                }
            }
        });
        if (proposal.status === 'ACTIVE') {
            await notifyMatchingWorkersOfProposal(proposal);
        }
        res.json(proposal);
    }
    catch (error) {
        console.error('Error updating proposal:', error);
        res.status(500).json({ error: 'Error updating job proposal' });
    }
};
exports.updateProposal = updateProposal;
const deleteProposal = async (req, res) => {
    try {
        const { id } = req.params;
        const proposal = await prisma_1.default.jobProposal.findUnique({
            where: { id }
        });
        if (proposal && proposal.status === 'ACTIVE') {
            await prisma_1.default.jobProposal.update({
                where: { id },
                data: { status: 'CANCELLED' }
            });
        }
        else {
            await prisma_1.default.jobProposal.delete({
                where: { id }
            });
        }
        res.json({ success: true });
    }
    catch (error) {
        console.error('Error deleting proposal:', error);
        res.status(500).json({ error: 'Error deleting proposal' });
    }
};
exports.deleteProposal = deleteProposal;
// Helper function to find matching workers and send notifications & simulated emails
const notifyMatchingWorkersOfProposal = async (proposal) => {
    try {
        const workers = await prisma_1.default.workerProfile.findMany({
            include: {
                user: true
            }
        });
        let profsArr = [];
        try {
            profsArr = JSON.parse(proposal.professions || '[]');
        }
        catch (e) { }
        let locsArr = [];
        try {
            locsArr = JSON.parse(proposal.locations || '[]');
        }
        catch (e) { }
        // Get company details
        const company = await prisma_1.default.companyProfile.findUnique({
            where: { id: proposal.companyId }
        });
        const companyName = company?.companyName || 'Un\'azienda';
        for (const worker of workers) {
            // 1. Profession match
            let matchProf = false;
            if (profsArr.length === 0)
                matchProf = true;
            else {
                const wProf = (worker.profession || '').toLowerCase();
                let wRoles = [];
                try {
                    wRoles = JSON.parse(worker.availabilityRoles || '[]');
                }
                catch (e) { }
                matchProf = profsArr.some(p => {
                    const target = p.toLowerCase();
                    return wProf.includes(target) || wRoles.some(r => r.toLowerCase().includes(target));
                });
            }
            if (!matchProf)
                continue;
            // 2. Location match
            let matchLoc = false;
            if (locsArr.length === 0) {
                matchLoc = true;
            }
            else {
                const matchesResidence = locsArr.some(loc => {
                    if (loc.province === 'Tutto il territorio nazionale' || loc.city === 'Tutto il territorio nazionale')
                        return true;
                    const wCity = (worker.city || '').toLowerCase().trim();
                    const wProv = (worker.province || '').toLowerCase().trim();
                    const lCity = (loc.city || '').toLowerCase().trim();
                    const lProv = (loc.province || '').toLowerCase().trim();
                    const lSigla = (loc.sigla || '').toLowerCase().trim();
                    return (lCity && wCity.includes(lCity)) ||
                        (lProv && (wProv.includes(lProv) || lProv.includes(wProv))) ||
                        (lSigla && wProv.includes(lSigla));
                });
                let matchesPreferred = false;
                let preferredRegions = [];
                try {
                    preferredRegions = JSON.parse(worker.availabilityRegionsProvinces || '[]');
                }
                catch (e) { }
                if (preferredRegions.length > 0) {
                    const hasAllRegions = preferredRegions.some((r) => r.region === 'Tutte le regioni');
                    if (hasAllRegions) {
                        matchesPreferred = true;
                    }
                    else {
                        matchesPreferred = locsArr.some(loc => {
                            if (loc.province === 'Tutto il territorio nazionale' || loc.city === 'Tutto il territorio nazionale')
                                return true;
                            const lProv = (loc.province || '').toLowerCase().trim();
                            const lSigla = (loc.sigla || '').toLowerCase().trim();
                            return preferredRegions.some(reg => {
                                const provincesList = reg.provinces || [];
                                const hasAllProvinces = provincesList.some((p) => p.name === 'Tutte le province');
                                if (hasAllProvinces)
                                    return true;
                                return provincesList.some((p) => {
                                    const pName = p.name.toLowerCase().trim();
                                    return pName.includes(lProv) || lProv.includes(pName) || pName.includes(lSigla);
                                });
                            });
                        });
                    }
                }
                matchLoc = matchesResidence || matchesPreferred;
            }
            if (!matchLoc)
                continue;
            // Contract Match
            let matchesContract = false;
            let wContracts = [];
            try {
                wContracts = JSON.parse(worker.availabilityContracts || '[]');
            }
            catch (e) { }
            if (wContracts.length === 0 || wContracts.includes('Nessuna preferenza')) {
                matchesContract = true;
            }
            else {
                let pContracts = [];
                try {
                    pContracts = JSON.parse(proposal.contractType || '[]');
                }
                catch (e) {
                    pContracts = [proposal.contractType || ''];
                }
                matchesContract = pContracts.some(pc => wContracts.some(wc => wc.toLowerCase().trim() === pc.toLowerCase().trim()));
            }
            if (!matchesContract)
                continue;
            // Education Match
            let reqEdus = [];
            try {
                reqEdus = JSON.parse(proposal.educationTitle || '[]');
            }
            catch (e) {
                reqEdus = [proposal.educationTitle || 'Nessuna preferenza'];
            }
            const checkEducationMatch = (workerLevel, edusList) => {
                if (edusList.length === 0 || edusList.includes('Nessuna preferenza')) {
                    return true;
                }
                return edusList.some(edu => {
                    const cleanEdu = edu.toLowerCase().trim();
                    if (cleanEdu === 'licenza media') {
                        return ['LICENZA_MEDIA', 'DIPLOMA', 'LAUREA_TRIENNALE', 'LAUREA_SPECIALISTICA', 'LAUREA_MAGISTRALE', 'MASTER'].includes(workerLevel);
                    }
                    if (cleanEdu === 'diploma') {
                        return ['DIPLOMA', 'LAUREA_TRIENNALE', 'LAUREA_SPECIALISTICA', 'LAUREA_MAGISTRALE', 'MASTER'].includes(workerLevel);
                    }
                    if (cleanEdu === 'laurea triennale') {
                        return ['LAUREA_TRIENNALE', 'LAUREA_SPECIALISTICA', 'LAUREA_MAGISTRALE', 'MASTER'].includes(workerLevel);
                    }
                    if (cleanEdu === 'laurea specialistica' || cleanEdu === 'laurea magistrale' || cleanEdu === 'laurea specialistica / magistrale') {
                        return ['LAUREA_SPECIALISTICA', 'LAUREA_MAGISTRALE', 'MASTER'].includes(workerLevel);
                    }
                    if (cleanEdu === 'master') {
                        return ['MASTER'].includes(workerLevel);
                    }
                    return false;
                });
            };
            let hasEduMatch = checkEducationMatch(worker.educationLevel, reqEdus);
            if (!hasEduMatch) {
                let otherTitles = [];
                try {
                    otherTitles = JSON.parse(worker.educationTitles || '[]');
                }
                catch (e) { }
                hasEduMatch = otherTitles.some((e) => checkEducationMatch(e.level, reqEdus));
            }
            if (!hasEduMatch)
                continue;
            // Salary Match Check
            const parseSalaryRange = (salaryStr) => {
                if (!salaryStr || salaryStr.toLowerCase().includes('nessuna preferenza')) {
                    return { min: null, max: null };
                }
                if (salaryStr.includes('-')) {
                    const parts = salaryStr.split('-');
                    const min = parseInt(parts[0].replace(/\D/g, ''), 10) || null;
                    const max = parseInt(parts[1].replace(/\D/g, ''), 10) || null;
                    return { min, max };
                }
                else {
                    const val = parseInt(salaryStr.replace(/\D/g, ''), 10) || null;
                    return { min: val, max: null };
                }
            };
            const wSalary = parseSalaryRange(worker.desiredSalary);
            const pMin = proposal.minSalary ? parseInt(proposal.minSalary.replace(/\D/g, ''), 10) || null : null;
            const pMax = proposal.maxSalary ? parseInt(proposal.maxSalary.replace(/\D/g, ''), 10) || null : null;
            if (wSalary.min !== null || wSalary.max !== null) {
                if (pMin !== null || pMax !== null) {
                    if (wSalary.min !== null && pMax !== null && pMax < wSalary.min) {
                        continue;
                    }
                    if (wSalary.max !== null && pMin !== null && pMin > wSalary.max) {
                        continue;
                    }
                }
            }
            // We found a match! Create a standard notification and a simulated email notification!
            const professionsStr = profsArr.join(', ');
            // A. Portal notification (check if already exists to avoid duplicates)
            const existingNotif = await prisma_1.default.notification.findFirst({
                where: {
                    userId: worker.userId,
                    title: `Nuova Proposta da ${companyName} 💼`,
                    type: 'NEW_PROPOSAL'
                }
            });
            if (!existingNotif) {
                await prisma_1.default.notification.create({
                    data: {
                        userId: worker.userId,
                        title: `Nuova Proposta da ${companyName} 💼`,
                        message: `Hai ricevuto una proposta di lavoro per la posizione di: ${professionsStr}.`,
                        type: 'NEW_PROPOSAL'
                    }
                });
                (0, pushService_1.sendPushNotification)(worker.userId, `Nuova Proposta da ${companyName} 💼`, `Hai ricevuto una proposta di lavoro per la posizione di: ${professionsStr}.`, '/dashboard').catch(err => console.error('Push error:', err));
                // B. Simulated email notification
                const emailSubject = `Nuova proposta di lavoro per te da ${companyName}!`;
                const emailBody = `Da: "Ramid Staff" <info@ramid.it>
A: "${worker.firstName} ${worker.lastName}" <${worker.user.email}>
Oggetto: ${emailSubject}

Gentile ${worker.firstName},

Siamo felici di comunicarti che l'azienda "${companyName}" ha pubblicato una nuova proposta di lavoro compatibile con il tuo profilo professionale!

Dettagli della proposta:
- Posizione ricercata: ${professionsStr}
- Sede: ${locsArr.map(l => `${l.city || ''} (${l.sigla || l.province || ''})`).join(' / ')}
- Retribuzione offerta: € ${proposal.minSalary || '0'} - € ${proposal.maxSalary || 'Max'} mensili netti

Accedi subito al tuo pannello su Ramid per consultare la proposta completa e rispondere all'azienda!

Cordiali saluti,
Il Team di Ramid`;
                await prisma_1.default.notification.create({
                    data: {
                        userId: worker.userId,
                        title: emailSubject,
                        message: emailBody,
                        type: 'EMAIL_SIMULATION'
                    }
                });
            }
        }
    }
    catch (err) {
        console.error('Error sending matching notifications:', err);
    }
};
const uploadIdDocument = async (req, res) => {
    try {
        const fs = require('fs');
        const path = require('path');
        const { base64Data } = req.body;
        if (!base64Data) {
            return res.status(400).json({ error: 'Nessun file fornito.' });
        }
        // Extract the actual base64 content
        const base64Content = base64Data.split(';base64,').pop();
        const buffer = Buffer.from(base64Content, 'base64');
        // Create a unique file name
        const sanitizedFileName = `id-${req.user.id}-${Date.now()}.png`;
        const uploadsPath = path.join(__dirname, '../../uploads');
        // Ensure dir exists
        if (!fs.existsSync(uploadsPath)) {
            fs.mkdirSync(uploadsPath, { recursive: true });
        }
        const filePath = path.join(uploadsPath, sanitizedFileName);
        fs.writeFileSync(filePath, buffer);
        const fileUrl = `/uploads/${sanitizedFileName}`;
        // Update database
        const updatedCompany = await prisma_1.default.companyProfile.update({
            where: { userId: req.user.id },
            data: { idDocumentUrl: fileUrl }
        });
        res.json({
            success: true,
            idDocumentUrl: fileUrl,
            company: updatedCompany
        });
    }
    catch (error) {
        console.error('Error uploading ID document:', error);
        res.status(500).json({ error: 'Errore durante il caricamento del documento d\'identità.' });
    }
};
exports.uploadIdDocument = uploadIdDocument;
