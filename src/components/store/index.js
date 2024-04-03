import {createStore} from 'redux';
import { createSlice } from '@reduxjs/toolkit';

export const INCREMENT = 'increment'

const initialState = {counter: 0, showCounter: true };

createSlice({
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
      state.counter = state.counter + action.amount;
    },
    toogleCounter(state){
      state.showCounter = !state.showCounter;
    }
  }
});

const counterRedux = (state = initialState, action) => {

  if (action.type === INCREMENT){
    return{
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'increase'){
    return{
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'decrement'){
    return{
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }

  if(action.type === 'toggle'){
    return{
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }
  return state;
}

const store = createStore(counterRedux);

export default store;
