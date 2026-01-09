import React from 'react';
import { useEffect } from 'react';
import Header from './Header.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer4 from './MainContainer4.jsx';
import MovieContainer5 from './MovieContainer5.jsx';

const Shows = () => {
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
            <MainContainer4/>
            <MovieContainer5/>
        </div>
    </div>
  )
}

export default Shows;