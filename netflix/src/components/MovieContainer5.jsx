import React from 'react';
import Footer from './Footer';
import MovieList5 from './MovieList5';

const MovieContainer5 = () => {
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10'>
      <MovieList5/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MovieContainer5;