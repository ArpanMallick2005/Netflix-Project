import React, { useEffect } from 'react';
import Header from './Header.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer1 from './MainContainer1.jsx';
import MovieContainer1 from './MovieContainer1.jsx';

const Movies = () => {
  const user=useSelector(store=>store.app.user);
  const navigate=useNavigate();
  
  useEffect(()=>{
    if(!user){
    navigate("/");
    }
  },[]);

  return (
    <div>
        <Header/>
        <div>
            <MainContainer1/>
            <MovieContainer1/>
        </div>
    </div>
  )
}

export default Movies;