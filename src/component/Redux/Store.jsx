import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./Counterslice.jsx" 

export default configureStore({
    reducer:{
        countSlice

    }
})