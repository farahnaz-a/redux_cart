import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../slices/cart/cartSlice'
import counterReducerFromCounterSlice from '../slices/counter/counterSlice'

export default configureStore({
    reducer: {
        allCounterActions : counterReducerFromCounterSlice,
        cart : cartSlice
    }
})