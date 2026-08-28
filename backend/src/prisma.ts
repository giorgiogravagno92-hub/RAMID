import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

let prisma: PrismaClient;

const tursoUrl = process.env.TURSO_DATABASE_URL;
const tursoToken = process.env.TURSO_AUTH_TOKEN;

if (tursoUrl && tursoToken) {
  const libsql = createClient({
    url: tursoUrl,
    authToken: tursoToken,
  });
  const adapter = new PrismaLibSQL(libsql);
  prisma = new PrismaClient({ adapter });
  console.log('[PRISMA] Database collegato a Turso Cloud.');
} else {
  prisma = new PrismaClient();
  console.log('[PRISMA] Database collegato a SQLite locale (dev.db).');
}

export default prisma;
