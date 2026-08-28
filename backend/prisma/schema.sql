-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "WorkerProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "photoUrl" TEXT,
    "phone" TEXT,
    "city" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "sigla" TEXT,
    "region" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "educationLevel" TEXT NOT NULL DEFAULT 'NESSUNO',
    "educationField" TEXT,
    "educationTitles" TEXT NOT NULL DEFAULT '[]',
    "skills" TEXT NOT NULL,
    "certifications" TEXT,
    "hasLicense" BOOLEAN NOT NULL DEFAULT false,
    "hasCar" BOOLEAN NOT NULL DEFAULT false,
    "availabilityStatus" TEXT NOT NULL,
    "availabilityDetails" TEXT,
    "maxDistanceKm" INTEGER NOT NULL DEFAULT 50,
    "desiredContract" TEXT,
    "desiredSalary" TEXT,
    "availabilityRegionsProvinces" TEXT NOT NULL DEFAULT '[]',
    "availabilityContracts" TEXT NOT NULL DEFAULT '[]',
    "availabilityRoles" TEXT NOT NULL DEFAULT '[]',
    "notes" TEXT,
    "availabilityNotes" TEXT,
    "availabilityUpdatedAt" DATETIME,
    "cvPdfUrl" TEXT,
    "videoPresentationUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "WorkerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CompanyProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "companyType" TEXT NOT NULL DEFAULT 'AZIENDA',
    "companyName" TEXT,
    "address" TEXT,
    "vatNumber" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "residenzaCapCitta" TEXT,
    "fiscalCode" TEXT,
    "industry" TEXT,
    "city" TEXT,
    "province" TEXT,
    "sigla" TEXT,
    "contactPerson" TEXT,
    "contactPhone" TEXT,
    "logoUrl" TEXT,
    "idDocumentUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CompanyProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "JobProposal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "professions" TEXT NOT NULL,
    "locations" TEXT NOT NULL,
    "educationTitle" TEXT NOT NULL,
    "hasLicense" BOOLEAN NOT NULL DEFAULT false,
    "hasCar" BOOLEAN NOT NULL DEFAULT false,
    "minSalary" TEXT,
    "maxSalary" TEXT,
    "notes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "contractType" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "JobProposal_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "CompanyProfile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProposalResponse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "proposalId" TEXT NOT NULL,
    "workerId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ProposalResponse_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "JobProposal" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ProposalResponse_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "WorkerProfile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "workerId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Favorite_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "CompanyProfile" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Favorite_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "WorkerProfile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InterviewRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "workerId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "interviewDate" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "InterviewRequest_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "CompanyProfile" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "InterviewRequest_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "WorkerProfile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WorkExperience" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "workerProfileId" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT,
    "description" TEXT,
    "city" TEXT,
    "province" TEXT,
    "sigla" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "WorkExperience_workerProfileId_fkey" FOREIGN KEY ("workerProfileId") REFERENCES "WorkerProfile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "WorkerProfile_userId_key" ON "WorkerProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyProfile_userId_key" ON "CompanyProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProposalResponse_proposalId_workerId_key" ON "ProposalResponse"("proposalId", "workerId");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_companyId_workerId_key" ON "Favorite"("companyId", "workerId");

