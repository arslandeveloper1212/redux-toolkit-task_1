import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './cartSlice'
import productReducer from './productslice'
export const store = configureStore({
  reducer: {
   cart: cartSliceReducer,
   product: productReducer
  },
})