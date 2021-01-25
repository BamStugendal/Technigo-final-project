import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ProductDescription from './feature/ProductDescription';
import StorePage from './feature/StorePage';

const MainPage = () => {
    return (
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact me</Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about" exact>
                about
            </Route>
            <Route path="/store" exact>
                <StorePage />
            </Route>

            <Route path="/posters/:id" exact>
            <ProductDescription />
          </Route>
          
            <Route path="/" exact>
              welcome home
            </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default MainPage
