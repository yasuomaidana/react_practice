import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CountSlice } from "./features/countSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        count: CountSlice.reducer
    }
});

export const useAppDispatch: () => typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;