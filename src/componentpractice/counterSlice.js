import { createSlice } from "@reduxjs/toolkit";
// import  { counterSlice } from "../components/reducer";

export const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count++;
        },

        decrement: (state) => {
            state.count--;
        },
        incrementByamount: (state, action) =>{
            state.count += action.payload;
        }
    }
})
export const { increment, decrement, incrementByamount } = counterSlice.actions;
export default counterSlice.reducer


























