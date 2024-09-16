import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import locationSlice from './locationSlice';
import movieSlice from './movieSlice';

const store = configureStore({
    reducer : {
        auth : authSlice,
        location : locationSlice,
        movie : movieSlice,
    }
})

export default store