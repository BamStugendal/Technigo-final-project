import { createSlice } from '@reduxjs/toolkit'


export const cart = createSlice({
    name: 'cart',
    initialState: {
        items:[] || JSON.parse(localStorage.getItem('product'))
        
    },
    reducers: {
    addItem: (state, action) => {
        const existingProduct = state.items.find((product) => product._id === action.payload._id)

        if (existingProduct) {
            existingProduct.quantity += 1
            
        } else {
            state.items.push({ ...action.payload, quantity: 1 })
            
            const saved = JSON.stringify(action.payload)
            localStorage.setItem("product", saved);
            const get = localStorage.getItem('product')
            console.log(JSON.parse(get))
        }
    },
    removeItem: (state, action) => {
        const { _id } = action.payload
        const existingProduct = state.items.find((product) => product._id === _id)
        
        if (existingProduct && existingProduct.quantity === 1) {
            state.items = state.items.filter((item) => item._id !== _id)
          } else if (existingProduct) {
            existingProduct.quantity -= 1
          }
    }
    }
})
