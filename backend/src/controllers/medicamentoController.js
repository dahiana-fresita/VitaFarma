import { getAllMedicamentos, insertMedicamento, editarMedicamento, deleteMedicamento } from "../models/Medicamento.js";

// 📦 Obtener todos los medicamentos
export const listarMedicamentos = async (req, res) => {
  try {
    const medicamentos = await getAllMedicamentos();
    res.status(200).json(medicamentos);
  } catch (error) {
    console.error("Error al listar medicamentos:", error);
    res.status(500).json({ message: "Error al obtener los medicamentos." });
  }
};

// ➕ Insertar un nuevo medicamento
export const agregarMedicamento = async (req, res) => {
  try {
    const medicamento = req.body;
    await insertMedicamento(medicamento);
    res.status(201).json({ message: "Medicamento agregado correctamente." });
  } catch (error) {
    console.error("Error al agregar medicamento:", error);
    res.status(500).json({ message: "No se pudo agregar el medicamento." });
  }
};

// ✏️ Editar un medicamento existente
export const actualizarMedicamento = async (req, res) => {
  try {
    const { id } = req.params;
    const medicamento = req.body;
    await editarMedicamento(id, medicamento);
    res.status(200).json({ message: "Medicamento actualizado correctamente." });
  } catch (error) {
    console.error("Error al actualizar medicamento:", error);
    res.status(500).json({ message: "No se pudo actualizar el medicamento." });
  }
};

// ❌ Eliminar un medicamento
export const eliminarMedicamento = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteMedicamento(id);
    res.status(200).json({ message: "Medicamento eliminado correctamente." });
  } catch (error) {
    console.error("Error al eliminar medicamento:", error);
    res.status(500).json({ message: "No se pudo eliminar el medicamento." });
  }
};