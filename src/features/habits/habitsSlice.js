import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {name: "meditation", type: "duration", goal: "meditate for 5-20 minutes every day" },
    {name: "workout", type: "checkmark", goal: "work out with progressive overload 3-7 times a week"},
    {name: "programming", type: "duration", goal: "quality work for 30-60 minutes every day"}

];

export const habitsSlice = createSlice({
    name: 'habits',
    initialState,
    }
);

export const selectHabits = (state) => state.habits;

export default habitsSlice.reducer;