import React from 'react';
import MovieList4 from './MovieList4';
import Footer from './Footer';

const MovieContainer4 = () => {
  return (
    <div className='bg-black'>
      <div className='relative z-10'>
      <MovieList4/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MovieContainer4;