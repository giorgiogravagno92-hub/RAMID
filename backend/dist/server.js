"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const workerRoutes_1 = __importDefault(require("./routes/workerRoutes"));
const companyRoutes_1 = __importDefault(require("./routes/companyRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const wpRoutes_1 = __importDefault(require("./routes/wpRoutes"));
const prisma_1 = __importDefault(require("./prisma"));
exports.prisma = prisma_1.default;
if (!process.env.JWT_SECRET) {
    console.error('❌ Errore fatale: La variabile d\'ambiente JWT_SECRET non è definita!');
    process.exit(1);
}
const app = (0, express_1.default)();
app.set('trust proxy', 1);
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '10mb' })); // Support larger base64 file payloads
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const uploadsDir = path_1.default.join(__dirname, '../uploads');
if (!fs_1.default.existsSync(uploadsDir)) {
    fs_1.default.mkdirSync(uploadsDir, { recursive: true });
}
app.use('/uploads', express_1.default.static(uploadsDir));
// Routes
app.use('/api/auth', authRoutes_1.default);
app.use('/api/workers', workerRoutes_1.default);
app.use('/api/companies', companyRoutes_1.default);
app.use('/api/admin', adminRoutes_1.default);
app.use('/api/wp', wpRoutes_1.default);
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
