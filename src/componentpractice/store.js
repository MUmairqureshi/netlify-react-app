import { configureStore } from "@reduxjs/toolkit";
import Reducer from './counterSlice'
export const store = configureStore({
    reducer: {
        counter:  Reducer
    }
})