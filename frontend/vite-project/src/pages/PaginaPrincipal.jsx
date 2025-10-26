import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent, faShippingFast, faCreditCard, faHeadset } from '@fortawesome/free-solid-svg-icons';


export const PaginaPrincipal = () => {
  return (
    <div>
        <div class="banner-imagenes">
         <ul>
                <li><img src="/img/medicamento1.avif" alt="medicamento1" /><p></p></li>
                <li><img src="/img/medicamento2.avif" alt="medicamento2" /><p></p></li>
                <li><img src="/img/medicamento3.avif" alt="medicamento3" /><p></p></li>
                <li><img src="/img/medicamento4.avif" alt="medicamento4" /><p></p></li>
                <li><img src="/img/medicamento5.avif" alt="medicamento5" /><p></p></li>
                <li><img src="/img/medicamento6.avif" alt="medicamento6" /><p></p></li>
         </ul>
       </div>
       <div>
        <section className='seccion-productos-destacados'>
        <h1 className='tituloProductosDestacados'>Productos Destacados</h1>
        <ul>
          <li>
            <img src="/img/producto1.webp" alt="producto1" />
            <h4>NOMBRE: <h5>Champu Elvive Glycolic Gloss</h5></h4>
            <h4>PRECIO: <h5>$29.700</h5></h4>
             <div>
               <button className='boton-vermas'>Ver mas</button>
               <button className='boton-verproducto'>Comprar</button>
            </div>
          </li>

          <li>
            <img src="/img/producto2.webp" alt="producto2" />
            <h4>NOMBRE: <h5>Eucerin Protector Solar Facial Toque Seco Gel-Crema Fps 50</h5></h4>
            <h4>PRECIO: <h5>$106.960</h5></h4>
            <div>
               <button className='boton-vermas'>Ver mas</button>
               <button className='boton-verproducto'>Comprar</button>
            </div>
          </li>
          <li>
            <img src="/img/producto3.webp" alt="producto3" />
            <h4>NOMBRE: <h5>Chapstick Menta</h5></h4>
            <h4>PRECIO: <h5>$15.300</h5></h4>
            <div>
               <button className='boton-vermas'>Ver mas</button>
               <button className='boton-verproducto'>Comprar</button>
            </div>
          </li>
          <li>
            <img src="/img/producto4.webp" alt="producto4" />
            <h4>NOMBRE: <h5>Oferta Desodorante Nivea Men Invisible Black & White Roll On 2 X 50 Ml</h5></h4>
            <h4>PRECIO: <h5>$28.100</h5></h4>
            <div>
               <button className='boton-vermas'>Ver mas</button>
               <button className='boton-verproducto'>Comprar</button>
            </div>
          </li>
        </ul>
       </section>
       </div>
       <h1 className='titulo-sobrenosotros'>Sobre Nosotros...</h1>
        <section className='seccion-info'>
            <div>
                <h2 className='titulo2'>Quienes somos💊🏥</h2>
                <p>En VitaFer, somos un equipo comprometido con la salud y el bienestar de nuestra comunidad. Con más de 10 años de experiencia en el sector farmacéutico, 
                  nos dedicamos a ofrecer productos de alta calidad, atención personalizada y soluciones efectivas para el cuidado integral de nuestros clientes. Nos encontramos en Medellin 
                  y trabajamos con un enfoque en la satisfacción del cliente, brindando asesoría profesional y confiable
                  en cada uno de nuestros servicios.

                  Contamos con un amplio portafolio de medicamentos, productos de salud y bienestar, y 
                  servicios como la toma de presión arterial y asesoramiento farmacéutico. Nuestro equipo 
                  de profesionales está siempre disponible para ofrecerte el apoyo que necesitas, 
                  priorizando la atención humana y la confianza en cada consulta.</p>
            </div>
            <div>
                <h2 className='titulo2'>Nuestra mision🌱💉</h2>
                <p>Nuestra misión en VitaFer es proporcionar productos farmacéuticos de alta calidad, 
                  junto con un servicio de atención personalizado que garantice la salud, el bienestar y 
                  la satisfacción de nuestros clientes. Buscamos ser un referente de confianza en el sector
                  farmacéutico, ofreciendo soluciones integrales a las necesidades de salud de la comunidad. Promovemos el acceso a medicamentos y servicios relacionados, asegurando un entorno seguro, eficiente y accesible para todas las personas.</p>
            </div>
        </section>
         <div>
        <section className='seccion-beneficios'>
            <div className='beneficio'>
                {/* Usamos el componente FontAwesomeIcon */}
                <FontAwesomeIcon icon={faPercent} />
                <h3>Descuentos</h3>
                <p>Aprovecha ofertas exclusivas y precios especiales en tus marcas favoritas.</p>
            </div>
            <div className='beneficio'>
                <FontAwesomeIcon icon={faShippingFast} />
                <h3>Envío Rápido</h3>
                <p>Entregamos tu pedido donde estés en el menor tiempo posible.</p>
            </div>
            <div className='beneficio'>
                <FontAwesomeIcon icon={faCreditCard} />
                <h3>Todos los Medios de Pago</h3>
                <p>Aceptamos tarjetas de crédito, débito, y pagos contra entrega.</p>
            </div>
            <div className='beneficio'>
                <FontAwesomeIcon icon={faHeadset} />
                <h3>Soporte 24/7</h3>
                <p>Más de 1500 mensajes de soporte diarios para ayudarte.</p>
            </div>
        </section>
    </div>
    </div>
  )
}
