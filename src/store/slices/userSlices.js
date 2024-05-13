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
        key:null,
        progress: null,
        onboarding: null,
        descrAdmin:null,
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
            state.key = action.payload.key
            state.progress = action.payload.progress
            state.onboarding = action.payload.onboarding
            state.descrAdmin = action.payload.descrAdmin


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
            state.key = null
            state.progress = null
            state.onboarding = null
            state.descrAdmin = null

        }
    },

})
export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer


