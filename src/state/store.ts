import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CountSlice } from "./features/countSlice";
import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./features/authSlice";

export const store = configureStore({
    reducer: {
        count: CountSlice.reducer,
        auth: AuthSlice.reducer
    }
});

export const useAppDispatch: () => typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;