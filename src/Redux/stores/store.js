import { configureStore } from '@reduxjs/toolkit'
import roleReducer from '../slices/roleSlice';
import useReducer from '../slices/userSlice';

export default configureStore({
 reducer: {
     role: roleReducer,
     user:useReducer
 }
})