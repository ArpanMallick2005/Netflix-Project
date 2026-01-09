import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        toggle:false,
        // trailerMovie:null, 
        // open:false,
        // id:"",
    },
    reducers:{
        // actions
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        setToggle:(state)=>{
            state.toggle = !state.toggle;
        },
    }
});
export const {getNowPlayingMovies, setToggle} = movieSlice.actions;
export default movieSlice.reducer;