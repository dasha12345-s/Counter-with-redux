import { createSlice, configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

const initialCounterState = {counter: 0, showCounter: true};

const counerSlice = createSlice({
  name: 'counterToolkit',
  initialState: initialCounterState,
  reducers: {
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increse(state, action){
      state.counter = state.counter + action.payload;
    },
    toogleCounter(state){
      state.showCounter = !state.showCounter;
    }
  }
});

export const counterActions = authSlice.actions;
export default counerSlice.reducer;