import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = () => {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const MOVIES = [
  { id: 1, title: "Stranger Things", poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" },
  { id: 2, title: "Lucifer", poster: "https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg" },
  { id: 3, title: "Evil Dead Rise", poster: "https://m.media-amazon.com/images/M/MV5BMjM1ZmViMmYtOGYzZC00YzhmLWE0MTMtMzNjYzcyNjEwYWRkXkEyXkFqcGc@._V1_.jpg" },
  { id: 4, title: "The Witcher", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { id: 5, title: "Money Heist", poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg" },
  { id: 6, title: "Breaking Bad", poster: "https://image.tmdb.org/t/p/w500/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg" },
  { id: 7, title: "Peaky Blinders", poster: "https://image.tmdb.org/t/p/w500/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg" },
  { id: 8, title: "Dark", poster: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg" },
  { id: 9, title: "Narcos", poster: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg" },
  { id: 10, title: "The Queen’s Gambit", poster: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg" },
  { id: 11, title: "Ozark", poster: "https://m.media-amazon.com/images/M/MV5BZDk1ZTdjOWItNTJmYS00MGIzLThmY2ItZWNiOGY5MzJlNTA5XkEyXkFqcGc@._V1_.jpg" },
  { id: 12, title: "The Crown", poster: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg" },
  { id: 13, title: "Vikings", poster: "https://image.tmdb.org/t/p/w500/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg" },
  { id: 14, title: "House of the Dragon", poster: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg" },
  { id: 15, title: "Game of Thrones", poster: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg" },
  { id: 16, title: "The Boys", poster: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg" },
  { id: 17, title: "Squid Game", poster: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg" },
  { id: 18, title: "The Last of Us", poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg" },
  { id: 19, title: "Manifest", poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },
  { id: 20, title: "You", poster: "https://m.media-amazon.com/images/M/MV5BMTVlYmRhMWQtNmE0Yi00ODM1LWEzMWEtNTQzZGZhODRmZTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
];

  const handleSearch = (e) => {
    e.preventDefault();

    const shuffled = [...MOVIES].sort(() => 0.5 - Math.random());
    setResults(shuffled.slice(0, 40));
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full bg-linear-to-b from-black px-6">
        <div className="flex h-16 items-center justify-between">
          <img
            className="w-28 md:w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix-logo"
          />

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/Browse")}
              className="bg-red-800 text-white px-4 py-1.5 rounded"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-red-700 text-white px-4 py-1.5 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Search */}
      <main className="bg-black min-h-screen pt-24 px-6 text-white">
        <form
          onSubmit={handleSearch}
          className="max-w-xl mx-auto mb-10"
        >
          <div className="flex border rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search movies, shows..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-3 text-white outline-none"
            />
            <button className="bg-red-800 px-6">
              Search
            </button>
          </div>
        </form>

        {/* 🎥 Suggested Movies */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {results.map((movie) => (
            <div
              key={movie.id}
              onClick={() => navigate("/Browse")}
              className="cursor-pointer hover:scale-105 transition"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="rounded"
              />
              <p className="text-sm mt-1">{movie.title}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Search;