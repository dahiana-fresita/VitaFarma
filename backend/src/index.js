import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import medicamentoRoutes from "./routes/MedicamentoRoutes.js";

dotenv.config();
console.log("🧠 Variables de entorno:", process.env.DB_NAME);
const app = express();

app.use(cors());
app.use(express.json());

// Rutas base
app.use("/api/medicamentos", medicamentoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});