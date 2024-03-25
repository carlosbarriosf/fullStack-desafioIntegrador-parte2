
import { Link } from 'react-router-dom'

import links from '../assets/links.json'

function Navbar({ulClassName, linkClassName, action = undefined}) {

    return (
        <nav>
            <ul className={ulClassName}>
                {links.map(link => {
                    return (
                        <Link 
                            to={link.link}
                            onClick={action}
                            className={linkClassName}
                            key={link.id}
                        >
                            <li>{link.link}</li>
                        </Link>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar