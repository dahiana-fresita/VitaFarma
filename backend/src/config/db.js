// src/config/db.js
import sql from "mssql";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables del archivo .env

// Configuración de conexión a SQL Server
const dbSettings = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  server: process.env.SERVER,
  database: process.env.DATABASE,
  port: 1433, // Puerto por defecto de SQL Server
  options: {
    encrypt: false, // Desactiva el cifrado (útil para conexiones locales)
    trustServerCertificate: true, // Permite certificados locales
  },
};

// Función para obtener la conexión
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

// Exportar también el objeto sql (para consultas)
export { sql };
