import { createSlice, configureStore } from '@reduxjs/toolkit';
import counerReducer from './counterSlice';
import authReducer from './authSlice'


const store = configureStore({
  reducer: { counter: counerReducer, auth: authReducer }
});

export default store;
