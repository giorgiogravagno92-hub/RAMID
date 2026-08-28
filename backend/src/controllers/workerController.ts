import { Response } from 'express';
import prisma from '../prisma';
import { sendPushNotification } from '../utils/pushService';

const SIGLA_TO_PROVINCE: Record<string, string> = {
  "AG": "Agrigento", "AL": "Alessandria", "AN": "Ancona", "AO": "Aosta", "AR": "Arezzo",
  "AP": "Ascoli Piceno", "AT": "Asti", "AV": "Avellino", "BA": "Bari", "BT": "Barletta-Andria-Trani",
  "BL": "Belluno", "BN": "Benevento", "BG": "Bergamo", "BI": "Biella", "BO": "Bologna",
  "BZ": "Bolzano", "BS": "Brescia", "BR": "Brindisi", "CA": "Cagliari", "CL": "Caltanissetta",
  "CB": "Campobasso", "CE": "Caserta", "CT": "Catania", "CZ": "Catanzaro", "CH": "Chieti",
  "CO": "Como", "CS": "Cosenza", "CR": "Cremona", "KR": "Crotone", "CN": "Cuneo",
  "EN": "Enna", "FM": "Fermo", "FE": "Ferrara", "FI": "Firenze", "FG": "Foggia",
  "FC": "Forlì-Cesena", "FR": "Frosinone", "GE": "Genova", "GO": "Gorizia", "GR": "Grosseto",
  "IM": "Imperia", "IS": "Isernia", "AQ": "L'Aquila", "SP": "La Spezia", "LT": "Latina",
  "LE": "Lecce", "LC": "Lecco", "LI": "Livorno", "LO": "Lodi", "LU": "Lucca",
  "MC": "Macerata", "MN": "Mantova", "MS": "Massa-Carrara", "MT": "Matera", "ME": "Messina",
  "MI": "Milano", "MO": "Modena", "MB": "Monza e della Brianza", "NA": "Napoli", "NO": "Novara",
  "NU": "Nuoro", "OR": "Oristano", "PD": "Padova", "PA": "Palermo", "PR": "Parma",
  "PV": "Pavia", "PG": "Perugia", "PU": "Pesaro e Urbino", "PE": "Pescara", "PC": "Piacenza",
  "PI": "Pisa", "PT": "Pistoia", "PN": "Pordenone", "PZ": "Potenza", "PO": "Prato",
  "RG": "Ragusa", "RA": "Ravenna", "RC": "Reggio Calabria", "RE": "Reggio Emilia", "RI": "Rieti",
  "RN": "Rimini", "RM": "Roma", "RO": "Rovigo", "SA": "Salerno", "SS": "Sassari",
  "SV": "Savona", "SI": "Siena", "SR": "Siracusa", "SO": "Sondrio", "SU": "Sud Sardegna",
  "TA": "Taranto", "TE": "Teramo", "TR": "Terni", "TO": "Torino", "TP": "Trapani",
  "TN": "Trento", "TV": "Treviso", "TS": "Trieste", "UD": "Udine", "VA": "Varese",
  "VE": "Venezia", "VB": "Verbano-Cusio-Ossola", "VC": "Vercelli", "VR": "Verona",
  "VV": "Vibo Valentia", "VI": "Vicenza", "VT": "Viterbo"
};

const REGIONS_AND_PROVINCES: Record<string, string[]> = {
  "Abruzzo": ["L'Aquila", "Chieti", "Pescara", "Teramo", "Tutte le province"],
  "Basilicata": ["Matera", "Potenza", "Tutte le province"],
  "Calabria": ["Catanzaro", "Cosenza", "Crotone", "Reggio Calabria", "Vibo Valentia", "Tutte le province"],
  "Campania": ["Avellino", "Benevento", "Caserta", "Napoli", "Salerno", "Tutte le province"],
  "Emilia-Romagna": ["Bologna", "Ferrara", "Forlì-Cesena", "Modena", "Parma", "Piacenza", "Ravenna", "Reggio Emilia", "Rimini", "Tutte le province"],
  "Friuli Venezia Giulia": ["Gorizia", "Pordenone", "Trieste", "Udine", "Tutte le province"],
  "Lazio": ["Frosinone", "Latina", "Rieti", "Roma", "Viterbo", "Tutte le province"],
  "Liguria": ["Genova", "Imperia", "La Spezia", "Savona", "Tutte le province"],
  "Lombardia": ["Bergamo", "Brescia", "Como", "Cremona", "Lecco", "Lodi", "Mantova", "Milano", "Monza e della Brianza", "Pavia", "Sondrio", "Varese", "Tutte le province"],
  "Marche": ["Ancona", "Ascoli Piceno", "Fermo", "Macerata", "Pesaro e Urbino", "Tutte le province"],
  "Molise": ["Campobasso", "Isernia", "Tutte le province"],
  "Piemonte": ["Alessandria", "Asti", "Biella", "Cuneo", "Novara", "Torino", "Verbano-Cusio-Ossola", "Vercelli", "Tutte le province"],
  "Puglia": ["Bari", "Barletta-Andria-Trani", "Brindisi", "Foggia", "Lecce", "Taranto", "Tutte le province"],
  "Sardegna": ["Cagliari", "Nuoro", "Oristano", "Sassari", "Sud Sardegna", "Tutte le province"],
  "Sicilia": ["Agrigento", "Caltanissetta", "Catania", "Enna", "Messina", "Palermo", "Ragusa", "Siracusa", "Trapani", "Tutte le province"],
  "Toscana": ["Arezzo", "Firenze", "Grosseto", "Livorno", "Lucca", "Massa-Carrara", "Pisa", "Pistoia", "Prato", "Siena", "Tutte le province"],
  "Trentino-Alto Adige/Südtirol": ["Bolzano", "Trento", "Tutte le province"],
  "Umbria": ["Perugia", "Terni", "Tutte le province"],
  "Valle d'Aosta/Vallée d'Aoste": ["Aosta", "Tutte le province"],
  "Veneto": ["Belluno", "Padova", "Rovigo", "Treviso", "Venezia", "Verona", "Vicenza", "Tutte le province"],
  "Tutte le regioni": []
};


export const getProfile = async (req: any, res: Response) => {
  try {
    const profile = await prisma.workerProfile.findUnique({
      where: { userId: req.user.id },
      include: { workExperiences: true }
    });

    if (!profile) {
      return res.status(404).json({ error: 'Worker profile not found' });
    }

    res.json(profile);
  } catch (error: any) {
    res.status(500).json({ error: 'Error fetching profile' });
  }
};

export const updateProfile = async (req: any, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      photoUrl,
      phone,
      city,
      province,
      region,
      profession,
      educationLevel,
      educationField,
      skills,
      certifications,
      hasLicense,
      hasCar,
      availabilityStatus,
      maxDistanceKm,
      desiredContract,
      desiredSalary,
      cvPdfUrl,
      videoPresentationUrl,
      workExperiences,
      availabilityRegionsProvinces,
      availabilityContracts,
      notes,
      educationTitles,
      sigla,
      availabilityRoles
    } = req.body;

    const skillsStr = typeof skills === 'object' ? JSON.stringify(skills) : skills;
    const regionsStr = typeof availabilityRegionsProvinces === 'object' ? JSON.stringify(availabilityRegionsProvinces) : availabilityRegionsProvinces;
    const contractsStr = typeof availabilityContracts === 'object' ? JSON.stringify(availabilityContracts) : availabilityContracts;
    const educationsStr = typeof educationTitles === 'object' ? JSON.stringify(educationTitles) : educationTitles;
    const rolesStr = typeof availabilityRoles === 'object' ? JSON.stringify(availabilityRoles) : availabilityRoles;

    const profile = await prisma.workerProfile.update({
      where: { userId: req.user.id },
      data: {
        firstName,
        lastName,
        photoUrl,
        phone,
        city,
        province,
        sigla,
        region,
        profession,
        educationLevel,
        educationField,
        educationTitles: educationsStr || '[]',
        skills: skillsStr,
        certifications,
        hasLicense: Boolean(hasLicense),
        hasCar: Boolean(hasCar),
        availabilityStatus,
        maxDistanceKm: Number(maxDistanceKm),
        desiredContract,
        desiredSalary,
        cvPdfUrl,
        videoPresentationUrl,
        availabilityRegionsProvinces: regionsStr || '[]',
        availabilityContracts: contractsStr || '[]',
        availabilityRoles: rolesStr || '[]',
        notes,
        workExperiences: {
          deleteMany: {},
          create: (workExperiences || []).map((exp: any) => ({
            companyName: exp.companyName,
            role: exp.role,
            startDate: exp.startDate,
            endDate: exp.endDate,
            description: exp.description,
            city: exp.city,
            province: exp.province,
            sigla: exp.sigla
          }))
        }
      },
      include: {
        workExperiences: true
      }
    });

    res.json(profile);
  } catch (error: any) {
    console.error('Error updating worker profile:', error);
    res.status(500).json({ error: 'Error updating profile' });
  }
};

export const toggleAvailability = async (req: any, res: Response) => {
  try {
    const { 
      status, 
      profession, 
      city, 
      maxDistanceKm, 
      availabilityDetails, 
      availabilityRegionsProvinces,
      availabilityContracts,
      notes,
      availabilityRoles,
      desiredSalary
    } = req.body;

    if (!['DISPONIBILE_PROPOSTE', 'DISPONIBILE_SUBITO', 'VALUTO_OFFERTE', 'NON_DISPONIBILE'].includes(status)) {
      return res.status(400).json({ error: 'Invalid availability status' });
    }

    const regionsStr = typeof availabilityRegionsProvinces === 'object' ? JSON.stringify(availabilityRegionsProvinces) : availabilityRegionsProvinces;
    const contractsStr = typeof availabilityContracts === 'object' ? JSON.stringify(availabilityContracts) : availabilityContracts;
    const rolesStr = typeof availabilityRoles === 'object' ? JSON.stringify(availabilityRoles) : availabilityRoles;

    let parsedRoles: string[] = [];
    try { parsedRoles = JSON.parse(rolesStr || '[]'); } catch (e) {}
    
    if (status !== 'NON_DISPONIBILE' && parsedRoles.length > 2) {
      return res.status(400).json({ error: 'Puoi selezionare al massimo 2 ruoli.' });
    }

    const existingProfile = await prisma.workerProfile.findUnique({
      where: { userId: req.user.id }
    });

    if (!existingProfile) {
      return res.status(404).json({ error: 'Worker profile not found' });
    }

    const cleanJson = (str: string | null) => {
      try {
        return JSON.stringify(JSON.parse(str || '[]'));
      } catch(e) {
        return '[]';
      }
    };

    const incomingRegions = cleanJson(regionsStr);
    const existingRegions = cleanJson(existingProfile.availabilityRegionsProvinces);
    const incomingContracts = cleanJson(contractsStr);
    const existingContracts = cleanJson(existingProfile.availabilityContracts);
    const incomingRoles = cleanJson(rolesStr);
    const existingRoles = cleanJson(existingProfile.availabilityRoles);
    const incomingSalary = desiredSalary || '';
    const existingSalary = existingProfile.desiredSalary || '';
    const incomingNotes = notes || '';
    const existingNotes = existingProfile.availabilityNotes || '';

    const isChangingDetails = 
      (regionsStr !== undefined && incomingRegions !== existingRegions) ||
      (availabilityContracts !== undefined && incomingContracts !== existingContracts) ||
      (availabilityRoles !== undefined && incomingRoles !== existingRoles) ||
      (desiredSalary !== undefined && incomingSalary !== existingSalary) ||
      (notes !== undefined && incomingNotes !== existingNotes);

    let updateUpdatedAt = false;

    if (status !== 'NON_DISPONIBILE' && isChangingDetails) {
      if (existingProfile.availabilityUpdatedAt) {
        const lastUpdate = new Date(existingProfile.availabilityUpdatedAt);
        const unlockDate = new Date(lastUpdate);
        unlockDate.setMonth(unlockDate.getMonth() + 3);
        
        if (new Date() < unlockDate) {
          const formattedUnlockDate = unlockDate.toLocaleDateString('it-IT');
          return res.status(400).json({ 
            error: `Non puoi modificare le tue preferenze di disponibilità prima del ${formattedUnlockDate}` 
          });
        }
      }
      updateUpdatedAt = true;
    }

    const profile = await prisma.workerProfile.update({
      where: { userId: req.user.id },
      data: {
        availabilityStatus: status,
        ...(status !== 'NON_DISPONIBILE' ? {
          profession,
          city,
          maxDistanceKm: maxDistanceKm ? Number(maxDistanceKm) : undefined,
          availabilityDetails,
          availabilityRegionsProvinces: regionsStr || '[]',
          availabilityContracts: contractsStr || '[]',
          availabilityRoles: rolesStr || '[]',
          desiredSalary: desiredSalary || '',
          availabilityNotes: notes || '',
          ...(updateUpdatedAt ? { availabilityUpdatedAt: new Date() } : {})
        } : {})
      },
      include: {
        workExperiences: true
      }
    });

    res.json({
      success: true,
      availabilityStatus: profile.availabilityStatus,
      profile
    });
  } catch (error: any) {
    console.error('Error toggling availability:', error);
    res.status(500).json({ error: 'Error toggling availability status' });
  }
};

export const getNotifications = async (req: any, res: Response) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' }
    });
    res.json(notifications);
  } catch (error: any) {
    res.status(500).json({ error: 'Error retrieving notifications' });
  }
};

export const markNotificationRead = async (req: any, res: Response) => {
  try {
    const { id } = req.params;
    const notification = await prisma.notification.update({
      where: { id, userId: req.user.id },
      data: { read: true }
    });
    res.json(notification);
  } catch (error: any) {
    res.status(500).json({ error: 'Error updating notification status' });
  }
};

export const getInterviewRequests = async (req: any, res: Response) => {
  try {
    const profile = await prisma.workerProfile.findUnique({
      where: { userId: req.user.id }
    });

    if (!profile) {
      return res.status(404).json({ error: 'Worker profile not found' });
    }

    const requests = await prisma.interviewRequest.findMany({
      where: { workerId: profile.id },
      include: {
        company: true
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(requests);
  } catch (error: any) {
    res.status(500).json({ error: 'Error fetching interview requests' });
  }
};

export const respondToInterviewRequest = async (req: any, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // "ACCEPTED", "DECLINED", "INTERESTED", "MORE_INFO", "NOT_INTERESTED"

    if (!['ACCEPTED', 'DECLINED', 'INTERESTED', 'MORE_INFO', 'NOT_INTERESTED'].includes(status)) {
      return res.status(400).json({ error: 'Invalid response status' });
    }

    const profile = await prisma.workerProfile.findUnique({
      where: { userId: req.user.id }
    });

    if (!profile) {
      return res.status(404).json({ error: 'Worker profile not found' });
    }

    const updatedRequest = await prisma.interviewRequest.update({
      where: { id, workerId: profile.id },
      data: { status },
      include: {
        company: true
      }
    });

    // Translate status for the notification message
    let statusText = status;
    if (status === 'INTERESTED') statusText = 'Interessato a essere contattato';
    else if (status === 'MORE_INFO') statusText = 'Interessato ad ottenere maggiori informazioni';
    else if (status === 'NOT_INTERESTED') statusText = 'Non interessato';
    else if (status === 'ACCEPTED') statusText = 'Accettato';
    else if (status === 'DECLINED') statusText = 'Rifiutato';

    // Notify the company of the worker's decision
    await prisma.notification.create({
      data: {
        userId: updatedRequest.company.userId,
        title: 'Risposta a Proposta Iniziale',
        message: `${profile.firstName} ${profile.lastName} ha risposto alla tua proposta iniziale. Risposta: "${statusText}".`,
        type: status === 'ACCEPTED' ? `ACCEPTED_CONTACT:${profile.id}` : 'MESSAGE'
      }
    });

    sendPushNotification(
      updatedRequest.company.userId,
      'Risposta a Proposta Iniziale',
      `${profile.firstName} ${profile.lastName} ha risposto: "${statusText}".`,
      '/dashboard'
    ).catch(err => console.error('Push error:', err));

    res.json(updatedRequest);
  } catch (error: any) {
    console.error('Error responding to proposal:', error);
    res.status(500).json({ error: 'Error responding to interview request' });
  }
};

export const uploadCv = async (req: any, res: Response) => {
  try {
    const fs = require('fs');
    const path = require('path');
    const { base64Data } = req.body;
    
    if (!base64Data) {
      return res.status(400).json({ error: 'Nessun file fornito' });
    }

    // Extract the actual base64 content
    const base64Content = base64Data.split(';base64,').pop();
    const buffer = Buffer.from(base64Content, 'base64');

    // Create a unique file name
    const sanitizedFileName = `cv-${req.user.id}-${Date.now()}.pdf`;
    const uploadsPath = path.join(__dirname, '../../uploads');
    
    // Ensure dir exists
    if (!fs.existsSync(uploadsPath)) {
      fs.mkdirSync(uploadsPath, { recursive: true });
    }

    const filePath = path.join(uploadsPath, sanitizedFileName);
    fs.writeFileSync(filePath, buffer);

    const fileUrl = `/uploads/${sanitizedFileName}`;

    // Update database
    await prisma.workerProfile.update({
      where: { userId: req.user.id },
      data: { cvPdfUrl: fileUrl }
    });

    res.json({
      success: true,
      cvPdfUrl: fileUrl
    });
  } catch (error: any) {
    console.error('Error uploading CV PDF:', error);
    res.status(500).json({ error: 'Errore durante il caricamento del file' });
  }
};

export const uploadPhoto = async (req: any, res: Response) => {
  try {
    const fs = require('fs');
    const path = require('path');
    const { base64Data } = req.body;
    
    if (!base64Data) {
      return res.status(400).json({ error: 'Nessuna foto fornita' });
    }

    // Extract the actual base64 content
    const base64Content = base64Data.split(';base64,').pop();
    const buffer = Buffer.from(base64Content, 'base64');

    // Create a unique file name
    const sanitizedFileName = `photo-${req.user.id}-${Date.now()}.jpg`;
    const uploadsPath = path.join(__dirname, '../../uploads');
    
    // Ensure dir exists
    if (!fs.existsSync(uploadsPath)) {
      fs.mkdirSync(uploadsPath, { recursive: true });
    }

    const filePath = path.join(uploadsPath, sanitizedFileName);
    fs.writeFileSync(filePath, buffer);

    const fileUrl = `/uploads/${sanitizedFileName}`;

    // Update database
    await prisma.workerProfile.update({
      where: { userId: req.user.id },
      data: { photoUrl: fileUrl }
    });

    res.json({
      success: true,
      photoUrl: fileUrl
    });
  } catch (error: any) {
    console.error('Error uploading profile photo:', error);
    res.status(500).json({ error: 'Errore durante il caricamento della foto' });
  }
};

export const getProposalsForWorker = async (req: any, res: Response) => {
  try {
    const worker = await prisma.workerProfile.findUnique({
      where: { userId: req.user.id },
      include: { proposalResponses: true }
    });

    if (!worker) {
      return res.status(404).json({ error: 'Worker profile not found' });
    }

    // Active or Cancelled proposals sent by companies
    const activeProposals = await prisma.jobProposal.findMany({
      where: {
        status: { in: ['ACTIVE', 'CANCELLED'] }
      },
      include: {
        company: true,
        responses: {
          where: { workerId: worker.id }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    const parseSalaryRange = (salaryStr: string | null | undefined) => {
      if (!salaryStr || salaryStr.toLowerCase().includes('nessuna preferenza')) {
        return { min: null, max: null };
      }
      if (salaryStr.includes('-')) {
        const parts = salaryStr.split('-');
        const min = parseInt(parts[0].replace(/\D/g, ''), 10) || null;
        const max = parseInt(parts[1].replace(/\D/g, ''), 10) || null;
        return { min, max };
      } else {
        const val = parseInt(salaryStr.replace(/\D/g, ''), 10) || null;
        return { min: val, max: null };
      }
    };

    // Filter proposals matching candidate's profession / roles and location
    const matchedProposals = activeProposals.filter(prop => {
      let profsArr: string[] = [];
      try { profsArr = JSON.parse(prop.professions || '[]'); } catch (e) {}

      let locsArr: any[] = [];
      try { locsArr = JSON.parse(prop.locations || '[]'); } catch (e) {}

      // Profession match
      let matchProf = false;
      if (profsArr.length === 0) matchProf = true;
      else {
        const wProf = (worker.profession || '').toLowerCase();
        let wRoles: string[] = [];
        try { wRoles = JSON.parse(worker.availabilityRoles || '[]'); } catch (e) {}
        matchProf = profsArr.some(p => {
          const target = p.toLowerCase();
          return wProf.includes(target) || wRoles.some(r => r.toLowerCase().includes(target));
        });
      }
      if (!matchProf) return false;

      // Location match
      let matchLoc = false;
      if (locsArr.length === 0) {
        matchLoc = true;
      } else {
        // 1. Check if matches candidate's primary residence
        const matchesResidence = locsArr.some(loc => {
          if (loc.province === 'Tutto il territorio nazionale' || loc.city === 'Tutto il territorio nazionale') return true;
          const wCity = (worker.city || '').toLowerCase().trim();
          const wProv = (worker.province || '').toLowerCase().trim();
          const lCity = (loc.city || '').toLowerCase().trim();
          const lProv = (loc.province || '').toLowerCase().trim();
          return (lCity && wCity.includes(lCity)) || (lProv && (wProv.includes(lProv) || lProv.includes(wProv)));
        });

        // 2. Check if matches candidate's preferred work regions/provinces
        let matchesPreferred = false;
        let preferredRegions: any[] = [];
        try {
          preferredRegions = JSON.parse(worker.availabilityRegionsProvinces || '[]');
        } catch (e) {
          preferredRegions = [];
        }

        if (preferredRegions.length > 0) {
          const hasAllRegions = preferredRegions.some((r: any) => r.region === 'Tutte le regioni');
          if (hasAllRegions) {
            matchesPreferred = true;
          } else {
            matchesPreferred = locsArr.some(loc => {
              if (loc.province === 'Tutto il territorio nazionale' || loc.city === 'Tutto il territorio nazionale') return true;
              const lProv = (loc.province || '').toLowerCase().trim();
              const lSigla = (loc.sigla || '').toUpperCase().trim();
              
              const resolvedProvName = (lProv || SIGLA_TO_PROVINCE[lSigla] || '').toLowerCase().trim();
              if (!resolvedProvName) return false;

              // Find the region of this province
              let proposalRegion: string | null = null;
              for (const [region, provinces] of Object.entries(REGIONS_AND_PROVINCES)) {
                if (provinces.some(p => {
                  const normalizedP = p.toLowerCase();
                  return normalizedP === resolvedProvName || normalizedP.includes(resolvedProvName) || resolvedProvName.includes(normalizedP);
                })) {
                  proposalRegion = region;
                  break;
                }
              }

              if (!proposalRegion) return false;

              const matchingRegionEntry = preferredRegions.find(r => r.region.toLowerCase().trim() === proposalRegion!.toLowerCase().trim());
              if (!matchingRegionEntry) return false;

              const provincesList = matchingRegionEntry.provinces || [];
              if (provincesList.length === 0) return true; // Empty array means all provinces in this region
              
              const hasAllProvinces = provincesList.some((p: any) => p.name === 'Tutte le province');
              if (hasAllProvinces) return true;

              return provincesList.some((p: any) => {
                const pName = p.name.toLowerCase().trim();
                return pName === resolvedProvName || pName.includes(resolvedProvName) || resolvedProvName.includes(pName);
              });
            });
          }
        }

        matchLoc = matchesResidence || matchesPreferred;
      }
      if (!matchLoc) return false;

      // Contract Match
      let matchesContract = false;
      let wContracts: string[] = [];
      try {
        wContracts = JSON.parse(worker.availabilityContracts || '[]');
      } catch (e) {}

      if (wContracts.length === 0 || wContracts.includes('Nessuna preferenza')) {
        matchesContract = true;
      } else {
        let pContracts: string[] = [];
        try {
          pContracts = JSON.parse(prop.contractType || '[]');
        } catch (e) {
          pContracts = [prop.contractType || ''];
        }
        matchesContract = pContracts.some(pc => 
          wContracts.some(wc => wc.toLowerCase().trim() === pc.toLowerCase().trim())
        );
      }
      if (!matchesContract) return false;

      // Education Match
      let reqEdus: string[] = [];
      try {
        reqEdus = JSON.parse(prop.educationTitle || '[]');
      } catch (e) {
        reqEdus = [prop.educationTitle || 'Nessuna preferenza'];
      }

      const checkEducationMatch = (workerLevel: string, edusList: string[]) => {
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
        let otherTitles: any[] = [];
        try {
          otherTitles = JSON.parse(worker.educationTitles || '[]');
        } catch(e) {}
        hasEduMatch = otherTitles.some((e: any) => checkEducationMatch(e.level, reqEdus));
      }
      if (!hasEduMatch) return false;

      // Salary Match
      const wSalary = parseSalaryRange(worker.desiredSalary);
      const pMin = prop.minSalary ? parseInt(prop.minSalary.replace(/\D/g, ''), 10) || null : null;
      const pMax = prop.maxSalary ? parseInt(prop.maxSalary.replace(/\D/g, ''), 10) || null : null;

      if (wSalary.min !== null || wSalary.max !== null) {
        if (pMin !== null || pMax !== null) {
          if (wSalary.min !== null && pMax !== null && pMax < wSalary.min) {
            return false;
          }
          if (wSalary.max !== null && pMin !== null && pMin > wSalary.max) {
            return false;
          }
        }
      }

      return true;
    });

    res.json(matchedProposals);
  } catch (error: any) {
    console.error('Error fetching proposals for worker:', error);
    res.status(500).json({ error: 'Error fetching proposals for worker' });
  }
};

export const respondToJobProposal = async (req: any, res: Response) => {
  try {
    const { id } = req.params; // proposalId
    const { status } = req.body; // "ACCEPTED" or "DECLINED"

    if (!['ACCEPTED', 'DECLINED'].includes(status)) {
      return res.status(400).json({ error: 'Invalid response status' });
    }

    const worker = await prisma.workerProfile.findUnique({
      where: { userId: req.user.id }
    });

    if (!worker) {
      return res.status(404).json({ error: 'Worker profile not found' });
    }

    const proposal = await prisma.jobProposal.findUnique({
      where: { id },
      include: { company: true }
    });

    if (!proposal) {
      return res.status(404).json({ error: 'Job proposal not found' });
    }

    // 15-day expiration check
    const proposalDate = new Date(proposal.createdAt);
    const fifteenDaysInMs = 15 * 24 * 60 * 60 * 1000;
    if (new Date().getTime() - proposalDate.getTime() > fifteenDaysInMs) {
      return res.status(400).json({ error: 'La proposta è scaduta e non è più possibile rispondere.' });
    }

    // Check if proposal is cancelled
    if (proposal.status === 'CANCELLED') {
      return res.status(400).json({ error: 'La proposta è stata annullata dal recruiter.' });
    }

    // Upsert proposal response
    const response = await prisma.proposalResponse.upsert({
      where: {
        proposalId_workerId: {
          proposalId: id,
          workerId: worker.id
        }
      },
      update: { status },
      create: {
        proposalId: id,
        workerId: worker.id,
        status
      }
    });

    if (status === 'ACCEPTED') {
      // Create notification for company
      await prisma.notification.create({
        data: {
          userId: proposal.company.userId,
          title: 'Candidato Ha Accettato!',
          message: `Il candidato ${worker.firstName} ${worker.lastName} (${worker.profession}) ha accettato la tua richiesta di ulteriori informazioni per la proposta di lavoro.`,
          type: `ACCEPTED_CONTACT:${worker.id}`
        }
      });

      sendPushNotification(
        proposal.company.userId,
        'Candidato Ha Accettato!',
        `Il candidato ${worker.firstName} ${worker.lastName} (${worker.profession}) ha accettato la tua proposta.`,
        '/dashboard'
      ).catch(err => console.error('Push error:', err));
    }

    res.json(response);
  } catch (error: any) {
    console.error('Error responding to job proposal:', error);
    res.status(500).json({ error: 'Error responding to job proposal' });
  }
};


