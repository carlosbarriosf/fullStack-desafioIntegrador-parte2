import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer class="footer">
        <p>
            2024, Juguetería Cósmica. Todos los derechos reservados.
        </p>
        <div>
            <ul>
                <li><Link to="/">Términos de servicio</Link ></li>
                <li><Link to="/">Pólitica de privacidad</Link ></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer