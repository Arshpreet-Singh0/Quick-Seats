import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movie",
    initialState:{
        singleMovie : null,
    },
    reducers:{

        setSingleMovie:(state, action)=>{
            state.loading = action.payload;
        },
    }

})

export const {setSingleMovie} = movieSlice.actions;

export default movieSlice.reducer;