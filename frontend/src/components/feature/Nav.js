import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Link } from "react-router-dom";
import 'assets/CSS/nav.css'

import { HiOutlineShoppingBag, HiX, HiMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import CartPreview from './CartPreview';

const Nav = () => {
  const [cart, setCart] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  const cartQuantity = useSelector(
    state => state.cart.items.reduce((total, item) => total + item.quantity, 0)
  )

  
  const showCart = () => {
    let cartToggleState = !cart
    setCart(cartToggleState)
    setSidebar(false)
  }



  const showSidebar = () => {
    let sidebarToggleState = !sidebar
    setSidebar(sidebarToggleState)
    setCart(false)
  }



  const exitOverlay = () => {
    setCart(false)
    setSidebar(false)
  }


  return (
    <>
    <header>
      <Link to="/store" >
        <img 
          className="logo"
          src='https://res.cloudinary.com/dg2wd4bjk/image/upload/v1611868334/b-logo_tjdz9l.png' 
          alt='Letter b' />
      </Link>
      <nav>

        <div className="cart-bar">
          <Link to="#" className="cart-icon" onClick={showCart}>
            <HiX className={cart ? 'exit active' : 'exit' }/>
            <HiOutlineShoppingBag className={cart ? 'shopping-bag active' : 'shopping-bag' } />
            <div className={cart ? 'quantity' : 'quantity active' }>{cartQuantity}</div>
          </Link>
        </div>
        <div className={cart ? 'cart active' : 'cart' }>
            <CartPreview />
        </div>

        <div className="divider"></div>

          <Link to="#" className="menu-link" onClick={showSidebar}>
            <HiX className={sidebar ? 'exit active' : 'exit'}/>
            <HiMenuAlt3 className={sidebar ? 'menu-icon' : 'menu-icon active'} />
          </Link>
            <div className={sidebar ? 'sidebar active' : 'sidebar'}>
              <NavLink to="/home">Portfolio</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/store">Store</NavLink>
            </div>  
 
      </nav>
      
    </header>
    <div className={sidebar || cart ? 'overlay active' : 'overlay' } onClick={exitOverlay}></div>
    </>
  )
}

export default Nav


{/* <div className="menu-icon">
<div className={sidebar ? 'top line active' : 'top line' }></div>
<div className={sidebar ? 'middle line active' : 'middle line' }></div>
<div className={sidebar ? 'bottom line active' : 'bottom line' }></div>
</div> */}