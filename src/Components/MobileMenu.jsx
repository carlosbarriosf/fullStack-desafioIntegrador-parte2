import React from 'react'

import { Link } from 'react-router-dom'
import   links  from '../assets/links.json'
import Navbar from './Navbar'


function MobileMenu({ action }) {
    console.log(links)
  return (
    <div className='mobile-nav'>
        <header className='mobile-nav__header'>
            <Link onClick={action} className='slideOutRight'  to='/'>Tienda</Link>
        </header>
        <Navbar 
            ulClassName='mobile-nav__menu' 
            linkClassName='mobile-nav__link' 
            action={action} 
        />
    </div>
  )
}

export default MobileMenu