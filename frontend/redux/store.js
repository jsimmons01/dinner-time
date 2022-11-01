import { configureStore } from '@reduxjs/toolkit';
import { studentsReducer } from '../features/students/studentsSlice';
import authReducer from '../features/auth/authSlice'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        students: studentsReducer,
        
    },   
});