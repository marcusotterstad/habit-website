import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHabitLog = createAsyncThunk(
    'habits/fetchHabitLog',
    async () => {
        const response = await fetch("http://localhost:4000/habitlog")
        return response.json();
    }
)

const initialState = {
  entities: [],
  status: 'idle',
  error: null
}

export const habitLogSlice = createSlice({
    name: 'habitLog',
    initialState,
    extraReducers(builder) {
      builder
        .addCase(fetchHabitLog.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchHabitLog.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.entities = action.payload
        })
        .addCase(fetchHabitLog.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
});

export const selectHabits = (state) => state.habits.entities;

/*const initialState = [
    {id: 1, name: "meditation", date: "2/7/2022", duration: 20, notes: "high quality meditation"},
    {id: 2, name: "programming", date: "2/7/2022", duration: 120, notes: "worked on habits app"},
    {id: 3, name: "workout", date: "2/7/2022", notes: "push A"},
    {id: 4, name: "meditation", date: "3/7/2022", duration: 18, notes: "did not focus well"},
    {id: 5, name: "programming", date: "3/7/2022", duration: 120, notes: "continued on habit app"},

];*/

export const selectHabitLog = (state) => state.habitLog.entities;

export default habitLogSlice.reducer;