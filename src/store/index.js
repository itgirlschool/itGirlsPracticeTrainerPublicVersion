import  {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query/react";
import  userReducer from './slices/userSlices.js'
import {emailApi} from "./Query/usersEmailGetCourse.js";

export const store = configureStore({
    reducer:{
        user:userReducer,
        [emailApi.reducerPath]:emailApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(emailApi.middleware)
})
setupListeners(store.dispatch)
