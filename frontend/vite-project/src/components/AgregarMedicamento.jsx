import React, { useState } from "react";
import axios from "axios";
import "./AgregarMedicamento.css";

const AgregarMedicamento = () => {
  const [formData, setFormData] = useState({
    Nombre: "",
    Descripcion: "",
    Precio: "",
    Stock: "",
    Categoria: "",
  });

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");

    try {
      await axios.post("http://localhost:3000/api/medicamentos", formData);
      setMensaje("✅ Medicamento agregado exitosamente");

      setFormData({
        Nombre: "",
        Descripcion: "",
        Precio: "",
        Stock: "",
        Categoria: "",
      });
    } catch (err) {
      setError("❌ No se pudo agregar el medicamento");
      console.error("Error al agregar medicamento:", err);
    }
  };

  return (
    <div className="contenedor-agregar">
      <h1 className="titulo-formulario">Agregar Medicamento</h1>

      <form onSubmit={handleSubmit} className="formulario">
        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            name="Nombre"
            value={formData.Nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label>Descripción:</label>
          <textarea
            name="Descripcion"
            value={formData.Descripcion}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="campo">
          <label>Precio:</label>
          <input
            type="number"
            name="Precio"
            value={formData.Precio}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label>Stock:</label>
          <input
            type="number"
            name="Stock"
            value={formData.Stock}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label>Categoría:</label>
          <input
            type="text"
            name="Categoria"
            value={formData.Categoria}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="boton-enviar">
          Agregar Medicamento
        </button>
      </form>

      {mensaje && <p className="mensaje-exito">{mensaje}</p>}
      {error && <p className="mensaje-error">{error}</p>}
    </div>
  );
};

export default AgregarMedicamento;
