import { useEffect } from 'react';
import Header from './Header.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MovieContainer2 from './MovieContainer2.jsx';

const News = () => {
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
            <MovieContainer2/>
        </div>
    </div>
  )
}

export default News;