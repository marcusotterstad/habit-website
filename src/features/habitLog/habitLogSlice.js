import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHabitLog = createAsyncThunk(
    'habits/fetchHabitLog',
    async ({getBy, condition, input}, thunkAPI) => {
      console.log({getBy, condition, input})
      if(input) {
        const queryString = `/habit-log?getBy=${getBy}&condition=${condition}&input=${input}`;
          
          const response = await fetch(queryString, {
              headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*"
              }
          });

          if(response.ok) {
              return response.json();
          } else {
              throw(new Error("Something with the request went wrong."));
          }
        } else {
          throw(new Error("input is not valid"))
        }
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

export const selectHabitLog = (state) => state.habitLog.entities;

export default habitLogSlice.reducer;