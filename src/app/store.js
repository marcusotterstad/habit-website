import { configureStore } from '@reduxjs/toolkit';
import habitLogReducer from '../features/habitLog/habitLogSlice';
import habitsReducer from '../features/habits/habitsSlice';

export const store = configureStore({
  reducer: {
    habits: habitsReducer,
    habitLog: habitLogReducer
  },
});
