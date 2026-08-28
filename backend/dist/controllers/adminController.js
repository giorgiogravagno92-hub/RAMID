"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSystemNotification = exports.deleteUser = exports.getCompanies = exports.getUsers = exports.getStats = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const getStats = async (req, res) => {
    try {
        const workersCount = await prisma_1.default.workerProfile.count();
        const companiesCount = await prisma_1.default.companyProfile.count();
        const interviewsCount = await prisma_1.default.interviewRequest.count();
        const favoritesCount = await prisma_1.default.favorite.count();
        const workersByStatus = await prisma_1.default.workerProfile.groupBy({
            by: ['availabilityStatus'],
            _count: {
                availabilityStatus: true
            }
        });
        const activeInterviewsByStatus = await prisma_1.default.interviewRequest.groupBy({
            by: ['status'],
            _count: {
                status: true
            }
        });
        res.json({
            totals: {
                workers: workersCount,
                companies: companiesCount,
                interviews: interviewsCount,
                favorites: favoritesCount
            },
            availabilityDistribution: workersByStatus.reduce((acc, curr) => {
                acc[curr.availabilityStatus] = curr._count.availabilityStatus;
                return acc;
            }, {}),
            interviewStatusDistribution: activeInterviewsByStatus.reduce((acc, curr) => {
                acc[curr.status] = curr._count.status;
                return acc;
            }, {})
        });
    }
    catch (error) {
        console.error('Error fetching admin statistics:', error);
        res.status(500).json({ error: 'Error fetching stats' });
    }
};
exports.getStats = getStats;
const getUsers = async (req, res) => {
    try {
        const users = await prisma_1.default.user.findMany({
            include: {
                workerProfile: true,
                companyProfile: true
            },
            orderBy: { createdAt: 'desc' }
        });
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching users list' });
    }
};
exports.getUsers = getUsers;
const getCompanies = async (req, res) => {
    try {
        const companies = await prisma_1.default.companyProfile.findMany({
            include: {
                user: {
                    select: { email: true, createdAt: true }
                }
            }
        });
        res.json(companies);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching companies list' });
    }
};
exports.getCompanies = getCompanies;
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params; // User ID
        await prisma_1.default.user.delete({
            where: { id }
        });
        res.json({ success: true, message: 'User and all related profiles deleted successfully.' });
    }
    catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Error deleting user' });
    }
};
exports.deleteUser = deleteUser;
const sendSystemNotification = async (req, res) => {
    try {
        const { title, message, targetRole } = req.body; // targetRole: 'ALL', 'WORKER', 'COMPANY'
        if (!title || !message) {
            return res.status(400).json({ error: 'Title and message are required' });
        }
        const whereClause = {};
        if (targetRole && targetRole !== 'ALL') {
            whereClause.role = targetRole;
        }
        const users = await prisma_1.default.user.findMany({ where: whereClause });
        // Create notifications for all target users
        const notificationsData = users.map((user) => ({
            userId: user.id,
            title,
            message,
            type: 'MESSAGE'
        }));
        await prisma_1.default.notification.createMany({
            data: notificationsData
        });
        res.json({
            success: true,
            deliveredCount: users.length,
            message: `System notification sent to ${users.length} users successfully.`
        });
    }
    catch (error) {
        console.error('Error sending system notification:', error);
        res.status(500).json({ error: 'Error sending notification' });
    }
};
exports.sendSystemNotification = sendSystemNotification;
