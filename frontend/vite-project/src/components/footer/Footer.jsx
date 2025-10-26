import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div>
            <div className="footer-row">
                <div className="footer-links">
                    <h4>Compañia</h4>
                    <ul>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Nuestros servicios</a></li>
                        <li><a href="#">Politica de privacidad</a></li>
                         <li><a href="#">Afiliate</a></li>
                    </ul>
                </div>

                  <div className="footer-links">
                    <h4>Ayuda</h4>
                    <ul>
                        <li><a href="#">Preguntas</a></li>
                        <li><a href="#">Compras</a></li>
                        <li><a href="#">Envios</a></li>
                         <li><a href="#">Estatus de orden</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4>Informacion de interes</h4>
                    <ul>
                        <li><a href="#">Reglamentos de actividades</a></li>
                        <li><a href="#">Muestras y obsequios</a></li>
                        <li><a href="#">Estilo de vida saludable</a></li>
                         <li><a href="#">Tu opinion</a></li>
                    </ul>
                </div>
                  <div className="footer-links">
                    <h4>Siguenos</h4>
                  <div className="social-link">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-x"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                  </div>
                </div>

            </div>

        </div>

    </div>
  )
}