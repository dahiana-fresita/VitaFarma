import express from "express";
import { listarMedicamentos, agregarMedicamento, actualizarMedicamento, eliminarMedicamento } from "../controllers/medicamentoController.js";

const router = express.Router();

router.get("/", listarMedicamentos);
router.post("/", agregarMedicamento);
router.put("/:id", actualizarMedicamento);
router.delete("/:id", eliminarMedicamento);

export default router;