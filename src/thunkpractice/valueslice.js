import { createSlice  , createAsyncThunk} from "@reduxjs/toolkit";
// import  { counterSlice } from "../components/reducer";


export const fetchRendmeNumber = createAsyncThunk(
  'numbers/fetchRendmeNumber',
 async(data , thunkAPI) => {
     console.log("hit on api")
    const response = await fetch('api/randomnumber');
    return await response.json()
}
    )


export const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        count: 0 ,
        isLoading : false
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
    },
    extraReducers: {
        [fetchRendmeNumber.fulfilled]: (state, action) => {
            console.log(state, action)
            state.isLoading = false
            state.count += 10

        },
        [fetchRendmeNumber.rejected]: (state, action) => {
            console.log("reject")
            state.isLoading = false
        },
        [fetchRendmeNumber.pending]: (state, action) => {
            state.isLoading = true
        },

    }

})
export const { increment, decrement, incrementByamount } = counterSlice.actions;

export const selectCount = (state) => ({
    count: state.counter.value,
    isLoading: state.counter.isLoading,
});


export default counterSlice.reducer
