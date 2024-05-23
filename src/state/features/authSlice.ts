import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Auth{
    isLoggedIn: boolean;
    username: string;
}

const initialState: Auth = { isLoggedIn: false, username: ''};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action:PayloadAction<{username:string}>) => {
            state.isLoggedIn = true;
            state.username = action.payload.username;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.username = '';
        }
    }
});

export default AuthSlice.reducer;
export const { login, logout } = AuthSlice.actions;
