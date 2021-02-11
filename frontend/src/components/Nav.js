import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import CartPreview from './feature/Store/Cart'
import 'assets/CSS/Store/nav.css'
import { 
    HiOutlineShoppingBag as BagIcon, 
    HiX as ExitIcon, 
    HiMenuAlt3 as MenuIcon
  } from 'react-icons/hi'
import { 
    TiSocialGithub as GitHubIcon, 
    TiSocialInstagram as InstagranIcon, 
    TiSocialLinkedin as LinkedinIcon 
  } from 'react-icons/ti'


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
              <ExitIcon className={cart ? 'exit active' : 'exit' }/>
              <BagIcon className={cart ? 'shopping-bag active' : 'shopping-bag' } />
              <div className={cart ? 'quantity' : 'quantity active' }>{cartQuantity}</div>
            </Link>
          </div>
          <div className={cart ? 'cart active' : 'cart' }>
              <CartPreview />
          </div>
          <div className='divider'></div>

          <Link to='#' className='menu-link' onClick={toggleSidebar}>
            <ExitIcon className={sidebar ? 'exit active' : 'exit'}/>
            <MenuIcon className={sidebar ? 'menu-icon' : 'menu-icon active'} />
          </Link>
          <div className={sidebar ? 'sidebar active' : 'sidebar'}>
            <div className='sidebar-links'>
              <NavLink to='/home'>Portfolio</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
              <NavLink to='/store'>Store</NavLink>
            </div>
            <div className='social-links'>
                <a href='https://www.instagram.com/illustration.bam/'><InstagranIcon /></a>
                <a href='https://github.com/BamStugendal'><GitHubIcon /></a>
                <a href='https://www.linkedin.com/in/b%C3%A4m-stugendal-7401a3172/'><LinkedinIcon /></a>
            </div>
          </div>  
        </nav>
      </header>
      <div className={sidebar || cart ? 'overlay active' : 'overlay' } onClick={closeOverlay}></div>
    </>
  )
} 
export default Nav