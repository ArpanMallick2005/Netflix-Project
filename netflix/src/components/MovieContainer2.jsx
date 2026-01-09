import React from 'react';
import MovieList3 from './MovieList3';
import Footer from './Footer';

const MovieContainer2 = () => {
  return (
    <div className='bg-black'>
      <div className='relative z-10'>
      <MovieList3/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MovieContainer2;