import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchRandomNumber = createAsyncThunk(
    'numbers/fetchRandomNumber',
    async (data, thunkAPI) => {
        console.log(" hit api")
        const response = await fetch('/api/randomnumber')

        return await response.json()
    }
)





export const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        count: 0,
        isLoading: false
    },
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--;
        },

        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    },


    extraReducers: {
        [fetchRandomNumber.fulfilled]: (state, action) => {
            console.log(state, action)
            state.isLoading = false
            state.count += action.payload

        },
        [fetchRandomNumber.reject]: (state, action) => {
            console.log("reject")
            state.isLoading = false
        },
        [fetchRandomNumber.pending]: (state, action) => {
            state.isLoading = true
        },

    }

})



export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer
