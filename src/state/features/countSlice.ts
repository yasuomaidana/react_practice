import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Count{
    count: number;
}



const initialState: Count = { count: 0};

export const CountSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        to_count: (state, action:PayloadAction<{mode:string}>) => {
            let mode = action.payload.mode.toLowerCase()
            if(mode === 'increment'){
                state.count += 1;
            }else if(mode === 'decrement'){
                state.count -= 1;
            }
        }
    }
});

export default CountSlice.reducer;
export const { to_count } = CountSlice.actions;