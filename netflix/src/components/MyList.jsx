import React from 'react';
import { useEffect } from 'react';
import Header from './Header.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MovieContainer6 from './MovieContainer6.jsx';

const MyList = () => {
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
            <MovieContainer6/>
        </div>
    </div>
    </div>
  )
}

export default MyList;