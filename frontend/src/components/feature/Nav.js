import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'

import { HiOutlineShoppingBag, HiX, HiMenuAlt3 } from 'react-icons/hi'
import { TiSocialGithub, TiSocialInstagram, TiSocialLinkedin } from 'react-icons/ti'
import CartPreview from './CartPreview'
import 'assets/CSS/Store/nav.css'

const Nav = () => {
  const [cart, setCart] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  const cartQuantity = useSelector(
    state => state.cart.items.reduce((total, item) => total + item.quantity, 0)
  )
  
  const toggleCart = () => {
    let cartToggleState = !cart
    setCart(cartToggleState)
    setSidebar(false)
  }

  const toggleSidebar = () => {
    let sidebarToggleState = !sidebar
    setSidebar(sidebarToggleState)
    setCart(false)
  }

  const closeOverlay = () => {
    setCart(false)
    setSidebar(false)
  }

  return (
    <>
      <header>
        <Link to='/store' >
          <img 
            className='logo'
            src='https://res.cloudinary.com/dg2wd4bjk/image/upload/v1611868334/b-logo_tjdz9l.png' 
            alt='Letter b' />
        </Link>
        <nav>
          <div className='cart-bar'>
            <Link to='#' className='cart-icon' onClick={toggleCart}>
              <HiX className={cart ? 'exit active' : 'exit' }/>
              <HiOutlineShoppingBag className={cart ? 'shopping-bag active' : 'shopping-bag' } />
              <div className={cart ? 'quantity' : 'quantity active' }>{cartQuantity}</div>
            </Link>
          </div>
          <div className={cart ? 'cart active' : 'cart' }>
              <CartPreview />
          </div>

          <div className='divider'></div>

          <Link to='#' className='menu-link' onClick={toggleSidebar}>
            <HiX className={sidebar ? 'exit active' : 'exit'}/>
            <HiMenuAlt3 className={sidebar ? 'menu-icon' : 'menu-icon active'} />
          </Link>
          <div className={sidebar ? 'sidebar active' : 'sidebar'}>
            <div className='sidebar-links'>
              <NavLink to='/home'>Portfolio</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
              <NavLink to='/store'>Store</NavLink>
            </div>
            <div className='social-links'>
              <h4>Check me out</h4>
              <div className='links'>
                <a href='https://www.instagram.com/illustration.bam/'><TiSocialInstagram /></a>
                <a href='https://github.com/BamStugendal'><TiSocialGithub /></a>
                <a href='https://www.linkedin.com/in/b%C3%A4m-stugendal-7401a3172/'><TiSocialLinkedin /></a>
              </div>
            </div>
          </div>  
        </nav>
      </header>
      <div className={sidebar || cart ? 'overlay active' : 'overlay' } onClick={closeOverlay}></div>
    </>
  )
} 
export default Nav