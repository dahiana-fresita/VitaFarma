import sql from "mssql";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Ruta absoluta al archivo .env
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, "../../.env") });

console.log("Variables cargadas:", process.env.DB_SERVER); // <- para verificar

const dbSettings = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    console.log("✅ Conexión establecida con SQL Server");
    return pool;
  } catch (error) {
    console.error("❌ Error al conectar con SQL Server:", error);
    throw new Error("No se pudo conectar a la base de datos");
  }
}

export { sql };


