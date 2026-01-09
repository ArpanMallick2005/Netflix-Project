import React from 'react';
import MovieCard from './MovieCard';
import MovieCard2 from './MovieCard2';
import MovieCard3 from './MovieCard3';
import MovieCard4 from './MovieCard4';
import MovieCard5 from './MovieCard5';
import MovieCard6 from './MovieCard6';
import MovieCard7 from './MovieCard7';
import MovieCard8 from './MovieCard8';
import MovieCard11 from './MovieCard11';
import MovieCard12 from './MovieCard12';
import MovieCard13 from './MovieCard13';

const MovieList4 = () => {
  return (
    <div className='px-8'>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
            <MovieCard6/>
        </div>
        </div>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer mt-5'>
        <div className='flex items-center'>
            <MovieCard/>
        </div>
        </div>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer mt-5'>
        <div className='flex items-center'>
            <MovieCard3/>
        </div>
        </div>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer mt-5'>
        <div className='flex items-center'>
            <MovieCard4/>
        </div>
        </div>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer mt-5'>
        <div className='flex items-center'>
            <MovieCard12/>
        </div>
        </div>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer mt-5'>
        <div className='flex items-center'>
            <MovieCard7/>
        </div>
        </div>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer mt-5'>
        <div className='flex items-center'>
            <MovieCard11/>
        </div>
        </div>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer mt-5'>
        <div className='flex items-center'>
            <MovieCard5/>
        </div>
        </div>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer mt-5'>
        <div className='flex items-center'>
            <MovieCard13/>
        </div>
        </div>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer mt-5'>
        <div className='flex items-center'>
            <MovieCard8/>
        </div>
        </div>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer mt-5'>
        <div className='flex items-center'>
            <MovieCard2/>
        </div>
        </div>
    </div>
  )
}

export default MovieList4;