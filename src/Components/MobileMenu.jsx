import React from 'react'

import { Link } from 'react-router-dom'
import   links  from '../assets/links.json'
import Navbar from './Navbar'
import CartBtn from './CartBtn'

function MobileMenu({ action }) {
    console.log(links)
  return (
    <div className='mobile-nav'>
        <header className='mobile-nav__header'>
            <Link onClick={action} className='slideOutLeft' to='/'>Tienda</Link>
        </header>
        <Navbar 
            ulClassName='mobile-nav__menu' 
            linkClassName='mobile-nav__link' 
            action={action} 
        />
        <CartBtn className='mobile-nav__cart' />
    </div>
  )
}

export default MobileMenu