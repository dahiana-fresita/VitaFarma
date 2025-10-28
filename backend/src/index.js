import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import medicamentoRoutes from "./routes/medicamentoRoutes.js";

dotenv.config(); 

const app = express();


app.use(cors());
app.use(express.json()); 

// Rutas principales
app.use("/api/medicamentos", medicamentoRoutes);

// Puerto desde el .env o por defecto 3000
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});
