import React from 'react'
import './Home.css'

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Sección de Marca y Eco-Compromiso */}
        <div className="footer-section">
          <h2 className="footer-logo">Eco<span>Futuro</span></h2>
          <p>Innovando hoy para un mañana más verde. Soluciones sostenibles con tecnología de vanguardia.</p>
        </div>

        {/* Enlaces Rápidos */}
        <div className="footer-section">
          <h3>Navegación</h3>
          <ul>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#impacto">Impacto Ambiental</a></li>
            <li><a href="#comunidad">Comunidad</a></li>
          </ul>
        </div>

        {/* Contacto/Suscripción */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <div className="subscribe-box">
            <input type="email" placeholder="Tu email" />
            <button>Unirse</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 EcoFuturo - Construido con energía 100% digital</p>
      </div>
    </footer>
  )
}

export default Footer