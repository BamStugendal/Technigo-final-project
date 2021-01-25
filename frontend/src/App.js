import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import MainPage from './components/MainPage'
import { cart } from './reducers/cart'
import { products } from './reducers/products'

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
}
