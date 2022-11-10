import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { studentsReducer } from '../features/students/studentsSlice';
import authReducer from '../features/auth/authSlice'
import {
    persistStore, 
    persistCombineReducers, 
    FLUSH, 
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const config = {
    key: 'root',
    storage: AsyncStorage, 
    debug: true
};

export const store = configureStore({
    reducer: persistCombineReducers(config,  {
        auth: authReducer,
        students: studentsReducer,
        
    }),  
     middleware: (getDefaultMiddleware) => 
     getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [
                FLUSH, 
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER
              ]
        }
     })
});

export const persistor = persistStore(store);