import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: null,
        token: null,
        displayName:null,
        password:null,
        phone:null,
        date:null,
        statusUser:null,
        id:null,
        uid:null,
        progress: []
    },
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email
            state.token = action.payload.token
            state.displayName =action.payload.displayName
            state.password = action.payload.password
            state.phone = action.payload.phone
            state.date = action.payload.data
            state.statusUser = action.payload.statusUser
            state.id = action.payload.id
            state.uid = action.payload.uid


        },
        removeUser(state) {
            state.email = null
            state.token = null
            state.id = null
            state.displayName = null
            state.password = null
            state.phone = null
            state.date = null
            state.statusUser = null
            state.id = null
            state.uid = null
        }
    },

})
export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer


