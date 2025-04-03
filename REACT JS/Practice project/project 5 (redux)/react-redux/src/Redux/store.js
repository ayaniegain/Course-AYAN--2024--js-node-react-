import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../Redux/counterSlice.js"
import userReducer from "../Redux/userSlice.js"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        allusers: userReducer
        },
})
