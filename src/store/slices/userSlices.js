import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: null,
        token: null,
        displayName:null,
        password:null,
        progress: []
    },
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email
            state.token = action.payload.token
            state.displayName =action.payload.displayName
            state.password = action.payload.password
        },
        removeUser(state) {
            state.email = null
            state.token = null
            state.id = null
            state.displayName = null
            state.password = null
        }
    },

})
export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer


