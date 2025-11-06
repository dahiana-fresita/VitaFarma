import { getConnection } from "./config/db.js";


(async () => {
  console.log("🔌 Probando conexión con SQL Server...");
  try {
    await getConnection();
  } catch (error) {
    console.error("❌ Error al probar conexión:", error.message);
  }
})();
