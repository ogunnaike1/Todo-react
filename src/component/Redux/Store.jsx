import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./Counterslice.jsx" 
import userSlice from "./Userslice.jsx"

export default configureStore({
    reducer:{
        countSlice,
        userSlice
    }
})