import React from 'react';
import MovieCard12 from './MovieCard12';
import MovieCard7 from './MovieCard7';
import MovieCard11 from './MovieCard11';
import MovieCard6 from './MovieCard6';
import TopMovies from './TopMovies';

const MovieList3 = () => {
  return (
    <div className='px-8'>
      <h2 className="text-white text-xl font-bold mb-4 pt-20">
        Worth the Wait
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard12/>
        </div>
        </div>
        <h2 className="text-white text-xl font-bold mb-4 mt-4">
        New on Netflix
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard7/>
        </div>
        </div>
        <h2 className="text-white text-xl font-bold mb-4 mt-4">
        Coming This Week
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard11/>
        </div>
        </div>
        <h2 className="text-white text-xl font-bold mb-4 mt-4">
        Sci-Fi & Fantasy Movies
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard6/>
        </div>
        </div>
        <h2 className="text-white text-xl font-bold mt-4">
        Top 10 Movies in India Today
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <TopMovies/>
        </div>
        </div>
    </div>
  )
}

export default MovieList3;