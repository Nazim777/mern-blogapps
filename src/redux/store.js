import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "./features/BlogSlice";
import UserSlice from "./features/UserSlice";
const store = configureStore({
    reducer:{
        blog:BlogSlice,
        user:UserSlice
    }
})
export default store