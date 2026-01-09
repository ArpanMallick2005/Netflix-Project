import React from 'react'
import MovieCard from './MovieCard';
import MovieCard2 from './MovieCard2';
import MovieCard3 from './MovieCard3';
import MovieCard4 from './MovieCard4';
import MovieCard5 from './MovieCard5';
import TopMovies from "./TopMovies";
import MovieCard6 from './MovieCard6';
import MovieCard7 from './MovieCard7';

const MovieList = () => {
  return (
    <div className='px-8'>
        <h2 className="text-white text-xl font-bold mb-4 mt-4">
        Popular Movie
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard/>
        </div>
        </div>
        <h2 className="text-white text-xl font-bold mb-4 mt-4">
        Anime
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard2/>
        </div>
        </div>
        <h2 className="text-white text-xl font-bold mb-4 mt-4">
        Made In India
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard3/>
        </div>
        </div>
        <h2 className="text-white text-xl font-bold mb-4 mt-4">
        Horror TV Serials
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard4/>
        </div>
        </div>
        <h2 className="text-white text-xl font-bold mb-4 mt-4">
        K-Dramas
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard5/>
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
        Sci-Fi & Fantasy Movies
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard6/>
        </div>
        </div>
        <h2 className="text-white text-xl font-bold mb-4 mt-4">
        Only on Netflix
        </h2>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard7/>
        </div>
        </div>
    </div>
  )
}

export default MovieList;