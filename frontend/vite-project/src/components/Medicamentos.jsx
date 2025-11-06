import React, { useEffect, useState } from "react";
import axios from "axios";

const Medicamentos = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [formData, setFormData] = useState({
    IdMedicamento: "",
    Nombre: "",
    Descripcion: "",
    Precio: "",
    Stock: "",
    Categoria: "",
    Imagen: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [editando, setEditando] = useState(false);

  // 🔹 Obtener medicamentos
  const obtenerMedicamentos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/medicamentos");
      setMedicamentos(res.data);
    } catch (error) {
      console.error("Error al listar medicamentos:", error);
    }
  };

  useEffect(() => {
    obtenerMedicamentos();
  }, []);

  // 🔹 Abrir modal
  const abrirModal = (med = null) => {
    if (med) {
      setFormData(med);
      setEditando(true);
    } else {
      setFormData({
        IdMedicamento: "",
        Nombre: "",
        Descripcion: "",
        Precio: "",
        Stock: "",
        Categoria: "",
        Imagen: "",
      });
      setEditando(false);
    }
    setModalOpen(true);
  };

  // 🔹 Cerrar modal
  const cerrarModal = () => setModalOpen(false);

  // 🔹 Manejar cambio
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Guardar (Agregar / Actualizar)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editando) {
        await axios.put(
          `http://localhost:3000/api/medicamentos/${formData.IdMedicamento}`,
          formData
        );
        alert("✅ Medicamento actualizado");
      } else {
        await axios.post("http://localhost:3000/api/medicamentos", formData);
        alert("✅ Medicamento agregado");
      }
      cerrarModal();
      obtenerMedicamentos();
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("❌ No se pudo guardar el medicamento");
    }
  };

  // 🔹 Eliminar medicamento
  const eliminarMedicamento = async (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este medicamento?")) {
      try {
        await axios.delete(`http://localhost:3000/api/medicamentos/${id}`);
        obtenerMedicamentos();
      } catch (error) {
        console.error("Error al eliminar:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">
          💊 Gestión de Medicamentos
        </h1>
        <button
          onClick={() => abrirModal()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md"
        >
          ➕ Nuevo Medicamento
        </button>
      </div>

      {/* 🧾 Tabla de medicamentos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicamentos.map((med) => (
          <div
            key={med.IdMedicamento}
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition text-center border border-gray-100"
          >
            <img
              src={med.Imagen || "/img/default.png"}
              alt={med.Nombre}
              className="w-40 h-40 object-contain mx-auto mb-3 rounded-lg"
              onError={(e) => (e.target.src = "/img/default.png")}
            />
            <h3 className="text-lg font-semibold text-gray-800">{med.Nombre}</h3>
            <p className="text-gray-600 text-sm">{med.Descripcion}</p>
            <p className="text-blue-700 font-semibold mt-1">
              💰 ${med.Precio.toLocaleString()}
            </p>
            <p className="text-gray-500 text-sm">📦 {med.Stock} unidades</p>
            <p className="text-green-600 text-sm mt-1">{med.Categoria}</p>

            <div className="mt-3 flex justify-center gap-3">
              <button
                onClick={() => abrirModal(med)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md"
              >
                ✏️ Editar
              </button>
              <button
                onClick={() => eliminarMedicamento(med.IdMedicamento)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
              >
                🗑️ Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🪟 Modal */}
      {modalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 relative border border-blue-100">
      {/* Botón de cierre */}
      <button
        onClick={cerrarModal}
        className="absolute top-4 right-5 text-gray-500 hover:text-red-500 text-2xl font-bold"
      >
        ×
      </button>

      {/* Título */}
      <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
        {editando ? "✏️ Editar Medicamento" : "➕ Agregar Nuevo Medicamento"}
      </h2>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            type="text"
            name="Nombre"
            placeholder="Ej: Paracetamol 500mg"
            value={formData.Nombre}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Categoría
          </label>
          <input
            type="text"
            name="Categoria"
            placeholder="Ej: Analgésico"
            value={formData.Categoria}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <textarea
            name="Descripcion"
            placeholder="Ej: Tabletas para el dolor y la fiebre"
            value={formData.Descripcion}
            onChange={handleChange}
            rows="3"
            className="w-full border rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Precio (COP)
          </label>
          <input
            type="number"
            name="Precio"
            placeholder="Ej: 1500"
            value={formData.Precio}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Stock disponible
          </label>
          <input
            type="number"
            name="Stock"
            placeholder="Ej: 100"
            value={formData.Stock}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Imagen del producto
          </label>
          <input
            type="text"
            name="Imagen"
            placeholder="Ej: /img/producto6.png"
            value={formData.Imagen}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {formData.Imagen && (
            <img
              src={formData.Imagen}
              alt="Vista previa"
              onError={(e) => (e.target.src = "/img/default.png")}
              className="w-32 h-32 object-contain mt-3 mx-auto rounded-lg border"
            />
          )}
        </div>

        {/* Botón de acción */}
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className={`w-full py-3 text-lg font-semibold text-white rounded-lg shadow-md transition-all ${
              editando
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {editando ? "Actualizar Medicamento" : "Agregar Medicamento"}
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </div>
  );
};

export default Medicamentos;
