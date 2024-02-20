import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useDispatch} from "react-redux";




const userSlice = createSlice({
    name: "user",
    initialState: {
        email: null,
        token: null,
        id: null,
        nameUser:null
    },
    reducers: {
        setUser(state, action) {
            console.log(state)
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.uid
            state.nameUser = action.payload.nameUser
        },
        removeUser(state) {
            console.log(state)
            state.email = null
            state.token = null
            state.id = null
            state.nameUser =null
        }
    },

})
export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer


