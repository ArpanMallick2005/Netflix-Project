import React from 'react';
import Footer from './Footer';
import MovieList2 from './MovieList2';

const MovieContainer3 = () => {
  return (
      <div className='bg-black'>
      <div className='-mt-52 relative z-10'>
      <MovieList2/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MovieContainer3;