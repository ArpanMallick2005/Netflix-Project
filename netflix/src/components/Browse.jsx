import React, { useEffect } from 'react';
import Header from './Header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';
import MovieContainer from './MovieContainer.jsx';
import axios from "axios";
import { NOW_PLAYING_MOVIE,options } from '../utils/constant.jsx';
import { getNowPlayingMovies } from '../redux/movieSlice.js';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
// import usePopularMovies from '../hooks/usePopularMovies.js';

const Browse = () => {
  const user=useSelector(store=>store.app.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  //my custom hooks
  useNowPlayingMovies();
  // usePopularMovies();
  
  useEffect(()=>{
    if(!user){
    navigate("/");
    }
  },[]);

  return (
    <div>
        <Header/>
        <div>
          <MainContainer/>
          <MovieContainer/>
        </div>
    </div>
  )
}

export default Browse;