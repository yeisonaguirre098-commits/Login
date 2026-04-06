import React from 'react'
import './Home.css'

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">Tecnología Sostenible</span>
        <h1>Impulsando el <br /><span>Futuro Verde</span></h1>
        <p>
          Unimos la innovación digital con la preservación ambiental para crear 
          ecosistemas inteligentes que respetan nuestro planeta.
        </p>
        <div className="hero-btns">
          <button className="btn-primary">Explorar Proyectos</button>
          <button className="btn-secondary">Saber más</button>
        </div>
      </div>
      <div className="hero-visual">
        {/* Aquí podrías poner una imagen o un gráfico circular futurista */}
        <div className="eco-circle"></div>
      </div>
    </section>
  )
}

export default Hero