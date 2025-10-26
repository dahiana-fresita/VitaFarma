import React, { useState } from "react";

const IniciarSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="p-12 rounded-lg shadow-2xl w-full max-w-2xl space-y-8 bg-gray-200"> 
        <div className="flex items-center justify-center mb-12">
          <img className="h-20 mr-4 rounded-lg" src="img/logo.jpg" alt="VitaFarma logo" /> 
          <h1 className="text-5xl font-bold text-red-700">VitaFarma</h1> 
        </div>

        <div className="flex items-center justify-center mb-6 bg-white">
          <form onSubmit={handleSubmit} className="w-full max-w-lg">

            <h3 className="text-4xl font-semibold text-sky-950 mb-6 text-center">Ingresa a tu Cuenta</h3> 

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-xl">👤 Email:</label> 
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-lg"
                placeholder="Ingresa tu email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-xl">🔑 Contraseña:</label> 
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-lg"
                placeholder="Ingresa tu contraseña"
              />
            </div>

            <div className="flex justify-center mb-4">
              <a className="text-sm text-black hover:underline" href="#">¿Olvidó su contraseña?</a>
            </div>

            <div className="flex justify-center  mt-6 mb-10">
              <button type="submit" className="p-6 px-8 py-4 bg-red-700 text-white rounded-lg hover:bg-red-600 focus:outline-none text-xl">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;

      