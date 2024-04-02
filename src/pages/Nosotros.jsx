import React from 'react'
import { Link } from 'react-router-dom'

function Nosotros() {
  return (
    <div class="container">
      <section class="nosotros">
          <div class="nosotros__banner">
              <h1>Juguetería Cósmica</h1>
              <span>
                  Tu destino definitivo para adentrarte en el apasionante mundo de
                  las figuras de colección.
              </span>
          </div>
          <p>
              En Juguetería Cósmica, creemos en la magia de la nostalgia y la
              admiración por los personajes que han marcado nuestras vidas a través del cine, anime y más. Nos
              enorgullece ofrecer una cuidadosa <Link to="/">selección de figuras</Link> que capturan la esencia de tus héroes
              favoritos, desde icónicos superhéroes hasta entrañables personajes de anime.
          </p>
      </section>
      </div>
  )
}

export default Nosotros