import { createSlice, configureStore } from '@reduxjs/toolkit';

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

const initialAuth = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState:  initialAuth,
  reducers: {
    login(state){
      state.isAuthenticated = true;
    },
    logout(state){
      state.isAuthenticated = false;
    }
  }
})


const store = configureStore({
  reducer: { counter: counerSlice.reducer, auth: authSlice.reducer }
});

export const authActions = authSlice.actions;
export const counterActions = counerSlice.actions;
export default store;
