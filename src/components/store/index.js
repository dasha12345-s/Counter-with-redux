import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: true };

const counerSlice = createSlice({
  name: 'counterToolkit',
  initialState,
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


const store = configureStore({
  reducer: counerSlice.reducer
});
export const counterActions = counerSlice.actions;
export default store;
