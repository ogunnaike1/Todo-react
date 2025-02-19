import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        isLoading:false,
        user:null,
        error:null
    },
    reducers:{
        isFetching:(state)=>{
            state.isLoading = true;
            state.user = null
            state.error = null
        },
        isSuccessful:(state, action)=>{
            state.isLoading = false;
            state.user = action.payload;
            state.error = null
        },
        isError:(state, action)=>{
            state.isLoading = false;
            state.user = null;
            state.error = action.payload
        }
    }
})

export default  userSlice.reducer
export const {isFetching, isSuccessful,  isError} = userSlice.actions