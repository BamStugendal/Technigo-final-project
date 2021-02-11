import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom'
  
import ProductDetails from './feature/Store/ProductDetails'
import Nav from './Nav'
import Checkout from './feature/Store/Checkout'
import StorePage from './feature/Store/StorePage'
import HomePage from './feature/Portfolio/HomePage'
import Contact from './feature/Contact/Contact'

const MainPage = () => {
    return (
        <Router>
          <Nav />
          <Switch>
            <Route path='/contact' exact component={Contact}></Route>
            <Route path='/store' exact component={StorePage}></Route>
            <Route path='/posters/:id' exact component={ProductDetails}></Route>
            <Route path='/checkout' exact component={Checkout}></Route>
            <Route path='/home' component={HomePage}></Route>
          </Switch>
      </Router>
    )
}
export default MainPage
