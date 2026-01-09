import React, { useEffect } from 'react';
import Header from './Header.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer3 from './MainContainer3.jsx';
import MovieContainer3 from './MovieContainer3.jsx';
const Games = () => {
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
            <MainContainer3/>
            <MovieContainer3/>
        </div>
    </div>
  )
}

export default Games;