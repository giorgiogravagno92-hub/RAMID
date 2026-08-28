import { createClient } from '@libsql/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Carica le variabili d'ambiente dal file .env del backend
dotenv.config({ path: path.join(__dirname, '../.env') });

async function main() {
  const url = process.env.TURSO_DATABASE_URL;
  const token = process.env.TURSO_AUTH_TOKEN;

  if (!url || !token) {
    console.error('Errore: TURSO_DATABASE_URL e TURSO_AUTH_TOKEN devono essere definiti nel file .env');
    process.exit(1);
  }

  // Percorso del file schema.sql
  const sqlPath = path.join(__dirname, 'schema.sql');
  if (!fs.existsSync(sqlPath)) {
    console.error(`Errore: File schema.sql non trovato in ${sqlPath}. Generalo prima.`);
    process.exit(1);
  }

  const sqlContent = fs.readFileSync(sqlPath, 'utf8');

  console.log('Connessione al database Turso Cloud in corso...');
  const client = createClient({ url, authToken: token });

  console.log('Avvio creazione delle tabelle su Turso...');
  
  // Dividiamo le istruzioni SQL usando il punto e virgola ';'
  const statements = sqlContent
    .split(';')
    .map(stmt => stmt.trim())
    .filter(stmt => stmt.length > 0);

  for (let i = 0; i < statements.length; i++) {
    const stmt = statements[i];
    console.log(`Esecuzione istruzione SQL #${i + 1} di ${statements.length}...`);
    try {
      await client.execute(stmt);
    } catch (err: any) {
      console.error(`❌ Errore durante l'esecuzione dell'istruzione #${i + 1}:`, err.message);
      console.error('Istruzione fallita:', stmt);
      process.exit(1);
    }
  }

  console.log('🎉 Struttura del database creata su Turso con successo!');
}

main().catch(console.error);
