import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; 

const IniciarSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor, llena todos los campos.");
      return;
    }

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      Swal.fire({
        icon: "success",
        title: "¡Login exitoso!",
        text: "Bienvenido de nuevo.",
      }).then(() => {
        navigate("/")
      });
    } else {
      setError("Email o contraseña incorrectos.");
      Swal.fire({
        icon: 'info',
        title: 'No tienes cuenta',
        text: '¿No tienes cuenta? Regístrate para empezar.',
        confirmButtonText: 'Registrar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/registrarse"; 
        }
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img className="logo" src="img/logo.jpg" alt="VitaFarma logo" />
          <h1 className="logo-title">VitaFarma</h1>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <h3 className="form-title">Inicia sesión</h3>
          {error && <p className="error-message">{error}</p>}
          <div className="input-group">
            <label htmlFor="email" className="input-label">👤 Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="Ingresa tu email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-label">🔑 Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <div className="submit-btn-container">
            <button type="submit" className="submit-btn">Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IniciarSesion;

      