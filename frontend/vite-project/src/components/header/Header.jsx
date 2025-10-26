import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <p>¡Bienvenido a la Farmacia!💊</p>
      </div>

      
      <div className="main-bar">
        <div className="logo" ><a className="logo" href="/">VitaFarma 🍃</a></div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar productos, marcas o categorías..."
          />
          <button>🔍</button>
        </div>

        <div className="user-section">
          <a href="/IniciarSesion">Iniciar sesión👤</a>
          <a href="#">🛒 Carrito</a>
        </div>
      </div>

      <nav className="category-bar">
        <a href="#">Medicamentos 👨🏻‍⚕️</a>
        <a href="#">Cuidado Personal 🛁</a>
        <a href="#">Nutrición 🥗</a>
        <a href="#">Ofertas 💲</a>
        <a href="#">Higiene 💦</a>
        <a href="/Productos">Productos 🧴</a>
      </nav>
    </header>

  
  
  )
}