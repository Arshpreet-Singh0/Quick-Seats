import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import locationSlice from './locationSlice';

const store = configureStore({
    reducer : {
        auth : authSlice,
        location : locationSlice,
    }
})

export default store