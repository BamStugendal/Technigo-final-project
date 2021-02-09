import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom'
  
import ProductDetails from './feature/ProductDetails'
import Nav from './feature/Nav'
import Cart from './feature/Cart'
import StorePage from './feature/StorePage'
import HomePage from './feature/Portfolio/HomePage'

const MainPage = () => {
    return (
        <Router>
          <Nav key='nav'/>
          <Switch>
            <Route path='/store' exact component={StorePage}></Route>
            <Route path='/posters/:id' exact component={ProductDetails}></Route>
            <Route path='/cart' exact component={Cart}></Route>
            <Route path='/home' component={HomePage}></Route>
          </Switch>
      </Router>
    )
}
export default MainPage
