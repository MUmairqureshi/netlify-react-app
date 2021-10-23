import { configureStore } from "@reduxjs/toolkit";
import Reducer from './valueslice'
export const store = configureStore({
    reducer: {
        counter:  Reducer
    }
})