import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Registrarse = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Por favor, llena todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const storedEmail = localStorage.getItem("userEmail");

    if (storedEmail === email) {
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Este email ya está registrado. Intenta con otro.',
      });
      return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    Swal.fire({
      icon: 'success',
      title: '¡Registrado con éxito!',
      text: 'Puedes iniciar sesión ahora.',
    }).then(() => {
      navigate("/iniciarSesion");
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img className="logo" src="img/logo.jpg" alt="VitaFarma logo" />
          <h1 className="logo-title">VitaFarma</h1>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <h3 className="form-title">Regístrate</h3>
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

          <div className="input-group">
            <label htmlFor="confirmPassword" className="input-label">🔒 Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field"
              placeholder="Confirma tu contraseña"
            />
          </div>

          <div className="submit-btn-container">
            <button type="submit" className="submit-btn">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registrarse;
