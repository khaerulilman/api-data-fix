import dotenv from 'dotenv';
import { neon } from "@neondatabase/serverless";

dotenv.config();

const db = neon(process.env.DATABASE_URL); // Buat koneksi ke database

// Validasi koneksi database
(async () => {
  try {
    const result = await db`SELECT version()`;
    console.log('PostgreSQL connected:', result[0].version);
  } catch (err) {
    console.error('PostgreSQL connection error:', err);
    process.exit(1); // Keluar jika koneksi gagal
  }
})();

export default db;
