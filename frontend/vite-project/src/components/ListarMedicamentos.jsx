import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListarMedicamentos.css";

const ListarMedicamentos = () => {
  const [medicamentos, setMedicamentos] = useState([]);

  useEffect(() => {
    const obtenerMedicamentos = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/medicamentos");
        setMedicamentos(res.data);
      } catch (error) {
        console.error("Error al obtener medicamentos:", error);
      }
    };

    obtenerMedicamentos();
  }, []);

  return (
    <div className="contenedor-lista">
      <h1 className="titulo-Productos">Productos Disponibles</h1>

      <ul className="lista-medicamentos">
        {medicamentos.map((med) => (
          <li key={med.IdMedicamento} className="tarjeta-medicamento">
            {/* Mostrar la imagen desde la URL guardada en la BD */}
            <img
              src={med.Imagen}
              alt={med.Nombre}
              
              className="imagen-medicamento"
            />

            <h4>
              NOMBRE: <h5>{med.Nombre}</h5>
            </h4>
            <h4>
              PRECIO: <h5>${med.Precio.toLocaleString()}</h5>
            </h4>
            <h4>
              CATEGORÍA: <h5>{med.Categoria}</h5>
            </h4>

            <div className="botones">
              <button className="boton-vermas">Ver más</button>
              <button className="boton-verproducto">Comprar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarMedicamentos;
