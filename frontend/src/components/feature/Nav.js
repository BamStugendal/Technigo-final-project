import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import { Cart } from './Cart'
import cartIcon from 'assets/images/cart.svg'
import 'assets/CSS/nav.css'

const Nav = () => {
  const [isShown, setIsShown] = useState(false)

  const cartQuantity = useSelector(
    state => state.cart.items.reduce((total, item) => total + item.quantity, 0)
  )

  const toggleShowCart = () =>setIsShown(!isShown)

  return (
    <header>
      <img 
        className="logo"
        src='https://res.cloudinary.com/dg2wd4bjk/image/upload/v1611868334/b-logo_tjdz9l.png' 
        alt='Letter b' />
      <nav>
        <NavLink to="/">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/store">Store</NavLink>
      {isShown && <Cart />}
      <div
        className={'cart-container'}
        onClick={toggleShowCart}
        // onMouseEnter={() => setIsShown(true)}
        // onMouseLeave={() => setIsShown(false)} 
      >
        <div>
          {cartQuantity}
        </div>
        <img 
          src={cartIcon}
          className="cart-icon" />
      </div>
      </nav>
    </header>
  )
}

export default Nav
