import { createSlice } from '@reduxjs/toolkit'


export const products = createSlice({
    name: 'products',
    initialState: {
        items:[]
    },
    reducers: {
        setItem: (state, action) => {
            state.items = action.payload
        }
    }
})


