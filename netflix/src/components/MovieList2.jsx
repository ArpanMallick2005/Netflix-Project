import React from "react";
import MovieCard9 from "./MovieCard9";
import MovieCard10 from "./MovieCard10";

const MovieList2 = () => {
  return (
    <div className="px-8">
      <h2 className="text-white text-xl font-bold mb-4 mt-4">
        Popular mobile games for you
      </h2>
      <div className="flex overflow-x-auto no-scrollbar cursor-pointer">
        <div className="flex items-center">
          <MovieCard9 />
        </div>
      </div>
      <h2 className="text-white text-xl font-bold mb-4 mt-4">
        Pick Up and Play Mobile Games
      </h2>
      <div className="flex overflow-x-auto no-scrollbar cursor-pointer">
        <div className="flex items-center">
          <MovieCard10 />
        </div>
      </div>
      <div className="relative w-full bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="z-10">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Find more games in the mobile app
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-md">
              From familiar favourites to Netflix exclusives, get unlimited
              mobile games in the Netflix app — all included with your
              membership.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.wallpapersden.com/image/download/netflix-squid-game-season-poster_bmhmZmaUmZqaraWkpJRnZWVlrWhlZWU.jpg"
              alt="Netflix Games"
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 bg-linear-to-l from-black via-black/40 to-transparent rounded-lg"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default MovieList2;