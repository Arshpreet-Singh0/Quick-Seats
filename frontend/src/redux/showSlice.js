import { createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
    name : "show",
    initialState:{
        allShows : [],
        singleShow : null,
    },
    reducers:{
        setAllShows : (state, action)=>{
            state.allShows = action.payload;
        },
        setSingleShow:(state, action)=>{
            state.singleShow = action.payload;
        },
    }

})

export const {setAllShows,setSingleShow} = showSlice.actions;

export default showSlice.reducer;