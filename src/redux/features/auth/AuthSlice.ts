import { createSlice } from "@reduxjs/toolkit"


type TState = {
    user: null | object;
    token: null | string;
}

const initialState:TState = {
    user: null,
    token: null
}

const AuthSlice  = createSlice({
    name: "auth",
    initialState,
    reducers : {
        setUser: (state,actions)=>{
            const {user,token} = actions.payload;
            state.user = user;
            state.token = token;
        },
        logout: (state)=>{
            state.token = null;
            state.user = null;
        }
    }
})
export const {setUser,logout} = AuthSlice.actions;
export default AuthSlice.reducer;