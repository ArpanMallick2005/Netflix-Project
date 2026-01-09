import React from 'react';
import MovieCard6 from './MovieCard6';
import MovieCard8 from './MovieCard8';
import TopMovies from './TopMovies';
import MovieCard11 from './MovieCard11';
import MovieCard12 from './MovieCard12';
import MovieCard13 from './MovieCard13';
import MovieCard14 from './MovieCard14';
import MovieCard15 from './MovieCard15';

const MovieList5 = () => {
  return (
    <div className='px-8'>
      <h2 className="text-white text-xl font-bold mb-4 mt-4">
        Award-Winning TV Shows
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard14/>
        </div>
        </div>
        <h2 className="text-white text-xl font-bold mb-4 mt-4">
        Casual Viewing
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard15/>
        </div>
        </div>
        <h2 className="text-white text-xl font-bold mb-4 mt-4">
        Coming-of-Age TV Shows
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer mt-5'>
        <div className='flex items-center'>
            <MovieCard13/>
        </div>
        </div>
        <h2 className="text-white text-xl font-bold mb-4 mt-4">
        Fantasy TV Shows
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer mt-5'>
        <div className='flex items-center'>
            <MovieCard12/>
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
        <h2 className="text-white text-xl font-bold mb-4 mt-4">
        Raunchy Comedy Movies
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard8/>
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
    </div>
  )
}

export default MovieList5;