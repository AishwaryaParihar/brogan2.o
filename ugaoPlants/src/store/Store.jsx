import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import CounterReducer from './CounterSlice'
export const store = configureStore({
  reducer: {
    user : userReducer,
    counter:CounterReducer
  },

})