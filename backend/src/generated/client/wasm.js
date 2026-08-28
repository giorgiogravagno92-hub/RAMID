
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  role: 'role',
  emailVerified: 'emailVerified',
  createdAt: 'createdAt'
};

exports.Prisma.WorkerProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  firstName: 'firstName',
  lastName: 'lastName',
  photoUrl: 'photoUrl',
  phone: 'phone',
  city: 'city',
  province: 'province',
  sigla: 'sigla',
  region: 'region',
  profession: 'profession',
  educationLevel: 'educationLevel',
  educationField: 'educationField',
  educationTitles: 'educationTitles',
  skills: 'skills',
  certifications: 'certifications',
  hasLicense: 'hasLicense',
  hasCar: 'hasCar',
  availabilityStatus: 'availabilityStatus',
  availabilityDetails: 'availabilityDetails',
  maxDistanceKm: 'maxDistanceKm',
  desiredContract: 'desiredContract',
  desiredSalary: 'desiredSalary',
  availabilityRegionsProvinces: 'availabilityRegionsProvinces',
  availabilityContracts: 'availabilityContracts',
  availabilityRoles: 'availabilityRoles',
  notes: 'notes',
  availabilityNotes: 'availabilityNotes',
  availabilityUpdatedAt: 'availabilityUpdatedAt',
  cvPdfUrl: 'cvPdfUrl',
  videoPresentationUrl: 'videoPresentationUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CompanyProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  companyType: 'companyType',
  companyName: 'companyName',
  address: 'address',
  vatNumber: 'vatNumber',
  firstName: 'firstName',
  lastName: 'lastName',
  residenzaCapCitta: 'residenzaCapCitta',
  fiscalCode: 'fiscalCode',
  industry: 'industry',
  city: 'city',
  province: 'province',
  sigla: 'sigla',
  contactPerson: 'contactPerson',
  contactPhone: 'contactPhone',
  logoUrl: 'logoUrl',
  idDocumentUrl: 'idDocumentUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.JobProposalScalarFieldEnum = {
  id: 'id',
  companyId: 'companyId',
  professions: 'professions',
  locations: 'locations',
  educationTitle: 'educationTitle',
  hasLicense: 'hasLicense',
  hasCar: 'hasCar',
  minSalary: 'minSalary',
  maxSalary: 'maxSalary',
  notes: 'notes',
  status: 'status',
  contractType: 'contractType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProposalResponseScalarFieldEnum = {
  id: 'id',
  proposalId: 'proposalId',
  workerId: 'workerId',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.FavoriteScalarFieldEnum = {
  id: 'id',
  companyId: 'companyId',
  workerId: 'workerId',
  createdAt: 'createdAt'
};

exports.Prisma.InterviewRequestScalarFieldEnum = {
  id: 'id',
  companyId: 'companyId',
  workerId: 'workerId',
  message: 'message',
  interviewDate: 'interviewDate',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  message: 'message',
  read: 'read',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.WorkExperienceScalarFieldEnum = {
  id: 'id',
  workerProfileId: 'workerProfileId',
  companyName: 'companyName',
  role: 'role',
  startDate: 'startDate',
  endDate: 'endDate',
  description: 'description',
  city: 'city',
  province: 'province',
  sigla: 'sigla',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  WorkerProfile: 'WorkerProfile',
  CompanyProfile: 'CompanyProfile',
  JobProposal: 'JobProposal',
  ProposalResponse: 'ProposalResponse',
  Favorite: 'Favorite',
  InterviewRequest: 'InterviewRequest',
  Notification: 'Notification',
  WorkExperience: 'WorkExperience'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Admin\\.gemini\\antigravity\\scratch\\ramid\\backend\\src\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "C:\\Users\\Admin\\.gemini\\antigravity\\scratch\\ramid\\backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "file:./dev.db"
      }
    }
  },
  "inlineSchema": "datasource db {\n  provider = \"sqlite\"\n  url      = \"file:./dev.db\"\n}\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = [\"driverAdapters\"]\n  output          = \"../src/generated/client\"\n}\n\nmodel User {\n  id             String          @id @default(uuid())\n  email          String          @unique\n  passwordHash   String\n  role           String // \"WORKER\", \"COMPANY\", \"ADMIN\"\n  emailVerified  Boolean         @default(true)\n  createdAt      DateTime        @default(now())\n  workerProfile  WorkerProfile?\n  companyProfile CompanyProfile?\n  notifications  Notification[]\n}\n\nmodel WorkerProfile {\n  id                           String             @id @default(uuid())\n  userId                       String             @unique\n  user                         User               @relation(fields: [userId], references: [id], onDelete: Cascade)\n  firstName                    String\n  lastName                     String\n  photoUrl                     String?\n  phone                        String? // Added contact phone number\n  city                         String\n  province                     String\n  sigla                        String?\n  region                       String\n  profession                   String\n  educationLevel               String             @default(\"NESSUNO\") // \"NESSUNO\", \"LICENZA_MEDIA\", \"DIPLOMA\", \"LAUREA\"\n  educationField               String? // Specific diploma or degree\n  educationTitles              String             @default(\"[]\") // JSON array of multiple education degrees\n  skills                       String // Comma-separated list of skills\n  certifications               String? // Comma-separated list of certifications\n  hasLicense                   Boolean            @default(false)\n  hasCar                       Boolean            @default(false)\n  availabilityStatus           String // \"DISPONIBILE_PROPOSTE\", \"NON_DISPONIBILE\"\n  availabilityDetails          String? // e.g. \"Lun-Ven, Mattina\"\n  maxDistanceKm                Int                @default(50)\n  desiredContract              String? // e.g. \"TEMPO_INDETERMINATO\", \"PART_TIME\", \"APPRENDISTATO\"\n  desiredSalary                String? // Optional salary range or figure\n  availabilityRegionsProvinces String             @default(\"[]\")\n  availabilityContracts        String             @default(\"[]\")\n  availabilityRoles            String             @default(\"[]\")\n  notes                        String?\n  availabilityNotes            String?\n  availabilityUpdatedAt        DateTime? // Track when availability preferences were last updated\n  cvPdfUrl                     String?\n  videoPresentationUrl         String?\n  createdAt                    DateTime           @default(now())\n  updatedAt                    DateTime           @updatedAt\n  favoritedBy                  Favorite[]\n  interviewRequests            InterviewRequest[]\n  workExperiences              WorkExperience[]\n  proposalResponses            ProposalResponse[]\n}\n\nmodel CompanyProfile {\n  id                String             @id @default(uuid())\n  userId            String             @unique\n  user              User               @relation(fields: [userId], references: [id], onDelete: Cascade)\n  companyType       String             @default(\"AZIENDA\") // \"AZIENDA\" or \"PERSONA_FISICA\"\n  companyName       String?\n  address           String?\n  vatNumber         String?\n  firstName         String?\n  lastName          String?\n  residenzaCapCitta String?\n  fiscalCode        String?\n  industry          String?\n  city              String?\n  province          String?\n  sigla             String?\n  contactPerson     String?\n  contactPhone      String?\n  logoUrl           String?\n  idDocumentUrl     String?\n  createdAt         DateTime           @default(now())\n  updatedAt         DateTime           @updatedAt\n  favorites         Favorite[]\n  interviewRequests InterviewRequest[]\n  jobProposals      JobProposal[]\n}\n\nmodel JobProposal {\n  id             String             @id @default(uuid())\n  companyId      String\n  company        CompanyProfile     @relation(fields: [companyId], references: [id], onDelete: Cascade)\n  professions    String // JSON array of string professions\n  locations      String // JSON array of location objects [{ city, province, sigla }]\n  educationTitle String // \"Nessuna preferenza\", \"LICENZA_MEDIA\", \"DIPLOMA\", \"LAUREA\"\n  hasLicense     Boolean            @default(false)\n  hasCar         Boolean            @default(false)\n  minSalary      String?\n  maxSalary      String?\n  notes          String?\n  status         String             @default(\"ACTIVE\") // \"DRAFT\" or \"ACTIVE\" or \"CANCELLED\"\n  contractType   String? // Added type of contract offered\n  createdAt      DateTime           @default(now())\n  updatedAt      DateTime           @updatedAt\n  responses      ProposalResponse[]\n}\n\nmodel ProposalResponse {\n  id         String        @id @default(uuid())\n  proposalId String\n  proposal   JobProposal   @relation(fields: [proposalId], references: [id], onDelete: Cascade)\n  workerId   String\n  worker     WorkerProfile @relation(fields: [workerId], references: [id], onDelete: Cascade)\n  status     String // \"ACCEPTED\" or \"DECLINED\"\n  createdAt  DateTime      @default(now())\n\n  @@unique([proposalId, workerId])\n}\n\nmodel Favorite {\n  id        String         @id @default(uuid())\n  companyId String\n  company   CompanyProfile @relation(fields: [companyId], references: [id], onDelete: Cascade)\n  workerId  String\n  worker    WorkerProfile  @relation(fields: [workerId], references: [id], onDelete: Cascade)\n  createdAt DateTime       @default(now())\n\n  @@unique([companyId, workerId])\n}\n\nmodel InterviewRequest {\n  id            String         @id @default(uuid())\n  companyId     String\n  company       CompanyProfile @relation(fields: [companyId], references: [id], onDelete: Cascade)\n  workerId      String\n  worker        WorkerProfile  @relation(fields: [workerId], references: [id], onDelete: Cascade)\n  message       String\n  interviewDate String\n  status        String // \"PENDING\", \"ACCEPTED\", \"DECLINED\"\n  createdAt     DateTime       @default(now())\n}\n\nmodel Notification {\n  id        String   @id @default(uuid())\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  title     String\n  message   String\n  read      Boolean  @default(false)\n  type      String // \"PROFILE_VIEW\", \"MESSAGE\", \"INTERVIEW_REQUEST\", \"EXPIRING_AVAILABILITY\"\n  createdAt DateTime @default(now())\n}\n\nmodel WorkExperience {\n  id              String        @id @default(uuid())\n  workerProfileId String\n  workerProfile   WorkerProfile @relation(fields: [workerProfileId], references: [id], onDelete: Cascade)\n  companyName     String\n  role            String\n  startDate       String\n  endDate         String?\n  description     String?\n  city            String?\n  province        String?\n  sigla           String?\n  createdAt       DateTime      @default(now())\n}\n",
  "inlineSchemaHash": "52eb429103a1f593c957191f2f730c090fc74e84d47a18dcd97cda79bfe66ac8",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"workerProfile\",\"kind\":\"object\",\"type\":\"WorkerProfile\",\"relationName\":\"UserToWorkerProfile\"},{\"name\":\"companyProfile\",\"kind\":\"object\",\"type\":\"CompanyProfile\",\"relationName\":\"CompanyProfileToUser\"},{\"name\":\"notifications\",\"kind\":\"object\",\"type\":\"Notification\",\"relationName\":\"NotificationToUser\"}],\"dbName\":null},\"WorkerProfile\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserToWorkerProfile\"},{\"name\":\"firstName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"photoUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"city\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"province\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sigla\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"region\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"profession\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"educationLevel\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"educationField\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"educationTitles\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"skills\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"certifications\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hasLicense\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"hasCar\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"availabilityStatus\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"availabilityDetails\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"maxDistanceKm\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"desiredContract\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"desiredSalary\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"availabilityRegionsProvinces\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"availabilityContracts\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"availabilityRoles\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"notes\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"availabilityNotes\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"availabilityUpdatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"cvPdfUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"videoPresentationUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"favoritedBy\",\"kind\":\"object\",\"type\":\"Favorite\",\"relationName\":\"FavoriteToWorkerProfile\"},{\"name\":\"interviewRequests\",\"kind\":\"object\",\"type\":\"InterviewRequest\",\"relationName\":\"InterviewRequestToWorkerProfile\"},{\"name\":\"workExperiences\",\"kind\":\"object\",\"type\":\"WorkExperience\",\"relationName\":\"WorkExperienceToWorkerProfile\"},{\"name\":\"proposalResponses\",\"kind\":\"object\",\"type\":\"ProposalResponse\",\"relationName\":\"ProposalResponseToWorkerProfile\"}],\"dbName\":null},\"CompanyProfile\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"CompanyProfileToUser\"},{\"name\":\"companyType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"companyName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"address\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"vatNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"firstName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"residenzaCapCitta\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fiscalCode\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"industry\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"city\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"province\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sigla\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"contactPerson\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"contactPhone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"logoUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"idDocumentUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"favorites\",\"kind\":\"object\",\"type\":\"Favorite\",\"relationName\":\"CompanyProfileToFavorite\"},{\"name\":\"interviewRequests\",\"kind\":\"object\",\"type\":\"InterviewRequest\",\"relationName\":\"CompanyProfileToInterviewRequest\"},{\"name\":\"jobProposals\",\"kind\":\"object\",\"type\":\"JobProposal\",\"relationName\":\"CompanyProfileToJobProposal\"}],\"dbName\":null},\"JobProposal\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"companyId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"company\",\"kind\":\"object\",\"type\":\"CompanyProfile\",\"relationName\":\"CompanyProfileToJobProposal\"},{\"name\":\"professions\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"locations\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"educationTitle\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hasLicense\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"hasCar\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"minSalary\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"maxSalary\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"notes\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"contractType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"responses\",\"kind\":\"object\",\"type\":\"ProposalResponse\",\"relationName\":\"JobProposalToProposalResponse\"}],\"dbName\":null},\"ProposalResponse\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"proposalId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"proposal\",\"kind\":\"object\",\"type\":\"JobProposal\",\"relationName\":\"JobProposalToProposalResponse\"},{\"name\":\"workerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"worker\",\"kind\":\"object\",\"type\":\"WorkerProfile\",\"relationName\":\"ProposalResponseToWorkerProfile\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Favorite\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"companyId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"company\",\"kind\":\"object\",\"type\":\"CompanyProfile\",\"relationName\":\"CompanyProfileToFavorite\"},{\"name\":\"workerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"worker\",\"kind\":\"object\",\"type\":\"WorkerProfile\",\"relationName\":\"FavoriteToWorkerProfile\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"InterviewRequest\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"companyId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"company\",\"kind\":\"object\",\"type\":\"CompanyProfile\",\"relationName\":\"CompanyProfileToInterviewRequest\"},{\"name\":\"workerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"worker\",\"kind\":\"object\",\"type\":\"WorkerProfile\",\"relationName\":\"InterviewRequestToWorkerProfile\"},{\"name\":\"message\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"interviewDate\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Notification\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"NotificationToUser\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"message\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"read\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"WorkExperience\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"workerProfileId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"workerProfile\",\"kind\":\"object\",\"type\":\"WorkerProfile\",\"relationName\":\"WorkExperienceToWorkerProfile\"},{\"name\":\"companyName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"startDate\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"endDate\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"city\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"province\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sigla\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {}
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

