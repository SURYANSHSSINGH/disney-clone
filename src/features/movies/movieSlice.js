import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Recommend: "",
    NewDisney: "",
    Original: "",
    Trending: "",
};

const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovies:(state,action) =>{
            state.Recommend = action.payload.Recommend
            state.NewDisney = action.payload.NewDisney
            state.Original = action.payload.Original
            state.Trending = action.payload.Trending
        },
    },

    });

export const { setMovies} = movieSlice.actions;

export const selectRecommend = (state) => state.user.Recommend;
export const selectNewDisney = (state) => state.user.NewDisney;
export const selectOriginal = (state) => state.user.Original;
export const selectTrending = (state) => state.user.Trending;


export default movieSlice.reducer;