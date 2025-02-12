import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer  from './slices/counter/counter'

export const store = configureStore({
  reducer: {
   counter: counterSliceReducer
  },
})