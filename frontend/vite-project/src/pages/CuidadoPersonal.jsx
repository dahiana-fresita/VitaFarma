import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const CuidadoPersonal = () => {
  const productos = [
    { id: 1, nombre: "Champu Elvive Glycolic Gloss", precio: 29700, imagen: "/img/producto1.webp" },
    { id: 2, nombre: "Crema Nivea Hidratante", precio: 37100, imagen: "/img/crema-hidratante.webp" },
    { id: 3, nombre: "Jabón Dove Blanco", precio: 20100, imagen: "/img/jabon-dove.png" },
    { id: 4, nombre: "Desodorante Nivea Men", precio: 28100, imagen: "/img/producto4.webp" },
    { id: 5, nombre: "Colgate Sensitive", precio: 38900, imagen: "/img/crema-dental.png" },
    { id: 6, nombre: "Nosotras Nocturna", precio: 15800, imagen: "/img/producto12.png" },
    { id: 7, nombre: "Cepillo de dientes Oral-B", precio: 20600, imagen: "/img/cepillo.webp" },
    { id: 8, nombre: "Champu Bebe Johnsons", precio: 43400, imagen: "/img/champu-bebe.webp" },
    { id: 9, nombre: "Oferta Talco Yodora", precio: 21300, imagen: "/img/talco.png" },
    { id: 10, nombre: "Crema Yodora", precio: 30200, imagen: "/img/crema-yodora.png" },
  ];


  // Leer carrito del localStorage al cargar la página
  const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

  const [carrito, setCarrito] = useState(carritoInicial);

  // Estado para la cantidad de cada producto
  const [cantidades, setCantidades] = useState(
    productos.reduce((acc, producto) => {
      acc[producto.id] = 1; // Inicializamos la cantidad de cada producto en 1
      return acc;
    }, {})
  );

  // Función para manejar el cambio de cantidad de un producto
  const handleCantidadChange = (e, id) => {
    const cantidadSeleccionada = parseInt(e.target.value, 10);
    if (cantidadSeleccionada > 0) {
      setCantidades({
        ...cantidades,
        [id]: cantidadSeleccionada, // Actualiza la cantidad solo para el producto con ese id
      });
    }
  };

  // Función para agregar al carrito
  const agregar = (producto) => {
    const cantidad = cantidades[producto.id] || 1; // Obtener la cantidad seleccionada
    if (cantidad <= 0) return; // No agregar si la cantidad es 0 o negativa

    // Verificar si el producto ya está en el carrito
    const existe = carrito.find((p) => p.id === producto.id);
    if (existe) {
      // Si ya existe, actualizamos la cantidad
      setCarrito(
        carrito.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + cantidad } : p
        )
      );
    } else {
      // Si no existe, agregamos el producto al carrito con la cantidad seleccionada
      setCarrito([...carrito, { ...producto, cantidad }]);
    }

    // Guardamos el carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
     Swal.fire({
      icon: 'success',
      title: `${producto.nombre} ha sido agregado al carrito.`,
      text: '¡Puedes seguir comprando o ir al carrito para finalizar!',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#28a745',
      background: '#f4f4f9',
      color: '#333',
      padding: '15px',
      backdrop: 'rgba(0,0,0,0.2)',
    });

    setCantidades({
      ...cantidades,
      [producto.id]: 1, // Resetear la cantidad después de agregar al carrito
    });
  };

  return (
    <div className="cuidado-personal-container">

      <h1 className='titulo-cuidadopersonal'>Cuidado Personal</h1>

      <section className="productos-cuidado">
        {productos.map((p) => (
          <div className="producto-cuidado-item" key={p.id}>
            <img src={p.imagen} alt={p.nombre} />
            <h4>{p.nombre}</h4>
            <p>Precio: ${p.precio}</p>
            <div>
              <h4>Cantidad: <input
                type="number"
                min="1"
                value={cantidades[p.id] || 1}
                onChange={(e) => handleCantidadChange(e, p.id)}
                style={{ width: '50px', marginRight: '10px' }}
              /></h4>
              <button className='button-agregarcarrito' onClick={() => agregar(p)}>Agregar al carrito</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
