import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHabits = createAsyncThunk(
    'habits/fetchHabits',
    async () => {
        const response = await fetch("/habits")
        return response.json();
    }
)

const initialState = {
  entities: [],
  status: 'idle',
  error: null
}

export const habitsSlice = createSlice({
    name: 'habits',
    initialState,
    extraReducers(builder) {
      builder
        .addCase(fetchHabits.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchHabits.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.entities = action.payload
        })
        .addCase(fetchHabits.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
});

export const selectHabits = (state) => state.habits.entities;

export default habitsSlice.reducer;