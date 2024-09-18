import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import locationSlice from './locationSlice';
import movieSlice from './movieSlice';
import showSlice from './showSlice';

const store = configureStore({
    reducer : {
        auth : authSlice,
        location : locationSlice,
        movie : movieSlice,
        shows : showSlice
    }
})

export default store