import sql from "mssql";

const config = {
  user: "cs2",
  password: "123",
  server: "localhost\\SQLEXPRESS",
  database: "VitaFarmaDB",
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

async function testConnection() {
  console.log("🔌 Probando conexión con SQL Server...");
  try {
    const pool = await sql.connect(config);
    console.log("✅ Conexión exitosa a la base de datos:", config.database);
    await pool.close();
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:");
    console.error(error.message);
  }
}

testConnection();
