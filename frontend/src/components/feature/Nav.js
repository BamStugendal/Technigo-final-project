import React, { useEffect, useState } from 'react'
import { useSelector, useStore } from 'react-redux'
import { NavLink, Link } from "react-router-dom";
import cartIcon from 'assets/images/cart.svg'
import 'assets/CSS/nav.css'

import { HiOutlineShoppingBag } from "react-icons/hi";
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
      <img 
        className="logo"
        src='https://res.cloudinary.com/dg2wd4bjk/image/upload/v1611868334/b-logo_tjdz9l.png' 
        alt='Letter b' />
      <nav>



      


        {/* <NavLink to="/">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/store">Store</NavLink>
         */}
        <div className="cart-bar">
          <Link to="#" className="cart-icon" onClick={showCart}>
            <HiOutlineShoppingBag />
            <div className="quantity">{cartQuantity}</div>
          </Link>
        </div>
        <div className={cart ? 'cart active' : 'cart' }>
              <Link to="#" className="cart-bar">
                <GrClose onClick={showCart}/>
              </Link>
            <CartPreview />
        </div>

        <div className="divider"></div>

        <div className="menu-bar">
          <Link to="#" className="menu-link" onClick={showSidebar}>
            <div className="menu-icon">
              <div className={sidebar ? 'top line active' : 'top line' }></div>
              <div className={sidebar ? 'middle line active' : 'middle line' }></div>
              <div className={sidebar ? 'bottom line active' : 'bottom line' }></div>
            </div>
          </Link>
            <div className={sidebar ? 'sidebar active' : 'sidebar' }>
              <NavLink to="/">Portfolio</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/store">Store</NavLink>
            </div>  
        </div>

        {/* <div className="menu">
          <div className="top line"></div>
          <div className="middle line"></div>
          <div className="bottom line"></div>
        </div> */}



      
      </nav>
      
    </header>
    <div className={sidebar || cart ? 'overlay active' : 'overlay' } onClick={exitOverlay}></div>
    </>
  )
}

export default Nav

      {/* {isShown && <CartPreview  />}
      <Link to="/cart">
        <div
          className={'cart-container'}
          onMouseEnter={e => {
            setStyle({display: 'flex'})}}
          onMouseLeave={e => {
            setStyle({display: 'none'})
        }}
        >
          <div>
            {cartQuantity}
          </div>
          <img 
            src={cartIcon}
            className="cart-icon" />
        </div>
      </Link> 

    
    
    */}