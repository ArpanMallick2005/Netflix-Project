import React from 'react'
import MovieList1 from './MovieList1';
import Footer from './Footer';

const MovieContainer1 = () => {
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10'>
      <MovieList1/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MovieContainer1;