import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Navbar from './Navbar'
import MobileMenu from './MobileMenu'
import { FaBars } from 'react-icons/fa6'
import Button from './Button'
import CartBtn from './CartBtn'


function Header() {

    const [openMenu, setOpenMenu] = useState(false)

    useEffect(() => {
        if(openMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => document.body.style.overflow = 'auto';
    }, [openMenu])

    return (
        <>
        <header className='header container'>
            <div className="header__logo-container">
                <Link to='/'><img className={`header__logo ${!openMenu ? 'opacityIncrease' : 'opacityDecrease'}`} src={logo} alt="Logo" /></Link>
                <div className={`header__line ${!openMenu ? 'opacityIncrease' : 'opacityDecrease'}`}></div>
                <Link to='/' className={`header__store ${!openMenu ? 'slideInRight' : undefined}`}>Tienda</Link>
            </div>
            <div className='header__navContainer'>
                <Navbar 
                    ulClassName='header__menu' 
                    linkClassName='header__link' 
                />
                <CartBtn className='cart__btn' />
            </div>
            <Button
                type='button'
                action={() => setOpenMenu(currentState => !currentState)}
                className='header__bars'
                icon={<FaBars />}
            />

        </header>
        {openMenu ? <MobileMenu action={() => setOpenMenu(currentState => !currentState)} /> : undefined}
        </>
  )
}

export default Header