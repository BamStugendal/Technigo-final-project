import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"
  
import ProductDetails from './feature/ProductDetails'
import Nav from './feature/Nav'
import StorePage from './feature/StorePage'

const MainPage = () => {
    return (
        <Router>
          <Nav />
          <Switch>
            {/* <Route path="/about" exact>
                about
            </Route> */}
            <Route path="/store" exact>
                <StorePage />
            </Route>

            {/* // Path to product details page */}
            <Route path="/posters/:id" exact>
              <ProductDetails />
            </Route>
          
            <Route path="/" exact>
              welcome home
            </Route>
          </Switch>
      </Router>
    )
}

export default MainPage
