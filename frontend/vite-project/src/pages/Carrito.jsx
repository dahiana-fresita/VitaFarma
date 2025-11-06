import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Carrito = () => {
  // Leer carrito desde localStorage al cargar la página
  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")) || []);

  const eliminar = (id) => {
    const nuevoCarrito = carrito.filter((p) => p.id !== id);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito)); // Guardamos el carrito actualizado en localStorage
  };

  const actualizar = (id, cantidad) => {
    if (cantidad <= 0) return eliminar(id); // Si la cantidad es menor o igual a 0, eliminamos el producto
    const nuevoCarrito = carrito.map((p) =>
      p.id === id ? { ...p, cantidad: Number(cantidad) } : p
    );
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito)); // Guardamos el carrito actualizado en localStorage
  };

  // Calcular el total del carrito
  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  // Función para finalizar la compra
  const finalizarCompra = () => {
    // Vaciar el carrito después de la compra
    setCarrito([]);
    localStorage.setItem("carrito", JSON.stringify([])); // Limpiar carrito en localStorage
    alert('¡Gracias por tu compra! El carrito se ha vaciado.');
  };

  return (
    <div className="container">
      <header>
        <div className="navbar">
          <div className="nav-links">
            <Link to="/CuidadoPersonal">
              <i className="fas fa-arrow-left"></i> Volver a los Productos
            </Link>
          </div>
        </div>
      </header>

      <h1 className="titulo-carrito">Carrito de Compras 🛒</h1>

      <section className="carrito">
        {carrito.length === 0 ? (
          <p className="carrito-vacio">Tu carrito está vacío.</p>
        ) : (
          <table className="tabla-carrito">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Eliminar</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((p) => (
                <tr key={p.id}>
                  <td>
                    <img src={p.imagen} alt={p.nombre} width="50" height="50" />
                  </td>
                  <td>{p.nombre}</td>
                  <td>${p.precio}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={p.cantidad}
                      onChange={(e) => actualizar(p.id, e.target.value)}
                      style={{ width: '50px' }}
                    />
                  </td>
                  <td>
                    <button onClick={() => eliminar(p.id)} className="btn-eliminar">Eliminar</button>
                  </td>
                  <td>${p.precio * p.cantidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {carrito.length > 0 && (
          <>
            <h3 className='total-carrito'>Total: ${total}</h3>
            <button className="finalizar-compra" onClick={finalizarCompra}>Finalizar Compra</button>
          </>
        )}
      </section>
    </div>
  );
};
