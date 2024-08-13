import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


export type TUser = {
    userId: string;
    role: string;
    iat: number;
    exp: number;
  };

type TState = {
  user: null | TUser;
  token: null | string;
};


const initialState: TState = {
  user: null,
  token: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      const { user, token } = actions.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});
export const { setUser, logout } = AuthSlice.actions;
export default AuthSlice.reducer;

export const selectUser = (state: RootState)=> state.auth.user;
