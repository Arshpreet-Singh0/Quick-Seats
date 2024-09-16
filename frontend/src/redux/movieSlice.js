import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movie",
    initialState:{
        allMovies : [],
        singleMovie : null,
    },
    reducers:{
        setAllMovies : (state, action)=>{
            state.allMovies = action.payload;
        },
        setSingleMovie:(state, action)=>{
            state.singleMovie = action.payload;
        },
    }

})

export const {setAllMovies,setSingleMovie} = movieSlice.actions;

export default movieSlice.reducer;