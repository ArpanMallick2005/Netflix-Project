import React, { useEffect } from 'react';
import Header from './Header.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer2 from './MainContainer2.jsx';
import MovieContainer4 from './MovieContainer4.jsx';

const Language = () => {
    const user=useSelector(store=>store.app.user);
      const navigate=useNavigate();
      
      useEffect(()=>{
        if(!user){
        navigate("/");
        }
      },[]);
  return (
    <div>
      <div>
        <Header/>
        <div>
            <MainContainer2/>
            <MovieContainer4/>
        </div>
    </div>
    </div>
  )
}

export default Language;