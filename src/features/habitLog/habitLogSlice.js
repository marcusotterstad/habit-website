import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {name: "meditation", date: "2/7/2022", duration: 20, notes: "high quality meditation"},
    {name: "programming", date: "2/7/2022", duration: 120, notes: "worked on habits app"},
    {name: "workout", date: "2/7/2022", notes: "push A"},
    {name: "meditation", date: "3/7/2022", duration: 18, notes: "did not focus well"}

];

export const habitLogSlice = createSlice({
    name: 'habitLog',
    initialState,
    }
);

export const selectHabitLog = (state) => state.habitLog;

export default habitLogSlice.reducer;