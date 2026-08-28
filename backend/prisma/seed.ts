import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Cleaning database...');
  await prisma.workExperience.deleteMany({});
  await prisma.notification.deleteMany({});
  await prisma.interviewRequest.deleteMany({});
  await prisma.favorite.deleteMany({});
  await prisma.proposalResponse.deleteMany({});
  await prisma.jobProposal.deleteMany({});
  await prisma.companyProfile.deleteMany({});
  await prisma.workerProfile.deleteMany({});
  await prisma.user.deleteMany({});

  console.log('Seeding database with admin only...');

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    console.error('❌ Errore: La variabile d\'ambiente ADMIN_PASSWORD è obbligatoria per eseguire il seeding!');
    process.exit(1);
  }

  // Hash admin password
  const passwordHash = await bcrypt.hash(adminPassword, 10);

  // Create Admin
  const admin = await prisma.user.create({
    data: {
      email: 'admin@ramid.it',
      passwordHash,
      role: 'ADMIN',
      emailVerified: true
    }
  });
  console.log('Created Admin:', admin.email);

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
