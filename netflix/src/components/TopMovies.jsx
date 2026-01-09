import React from "react";

const TopMovies = () => {
  const posters = [
    "https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
    "https://m.media-amazon.com/images/M/MV5BY2UxOTM1YmEtZTc0Yy00MmIwLWEyMTYtNDIwM2NjOWNiOTdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "https://image.tmdb.org/t/p/w500/9z4jRr43JdtU66P0iy8h18OyLql.jpg",
    "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "https://upload.wikimedia.org/wikipedia/en/b/be/Stranger_Things_season_5.jpeg",
    "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "https://image.tmdb.org/t/p/w500/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
  ];

  return (
    <section className="px-6 mt-10">

      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {posters.map((poster, index) => (
          <div
            key={index}
            className="relative min-w-45 h-65 flex items-end"
          >
            {/* BIG NUMBER */}
            <span
              className="
                absolute
                -left-15
                bottom-0
                text-[200px]
                font-extrabold
                text-gray-800
                leading-none
                select-none
              "
            >
              {index}
            </span>

            {/* POSTER */}
            <img
              src={poster}
              alt={`Top ${index + 1}`}
              className="
                relative
                z-10
                w-40
                h-60
                object-cover
                rounded-md
                shadow-xl
                hover:scale-105
                transition
                cursor-pointer
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopMovies;