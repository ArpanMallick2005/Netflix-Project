import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { API_END_POINT } from '../utils/constant';
import axios from 'axios';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice';

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) toast.success(res.data.message);
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
    navigate("/Search");
  };

  const movies=()=>{
    dispatch(setToggle());
    navigate("/browse/movies");
  }

  const browse=()=>{
    dispatch(setToggle());
    navigate("/browse");
  }

  const games=()=>{
    dispatch(setToggle());
    navigate("/browse/games");
  }

  const handleNew=()=>{
    dispatch(setToggle());
    navigate("/browse/new");
  }

  const language=()=>{
    dispatch(setToggle());
    navigate("/browse/language");
  }

  const shows=()=>{
    dispatch(setToggle());
    navigate("/browse/shows");
  }

  const lists=()=>{
    dispatch(setToggle());
    navigate("/browse/list");
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-linear-to-b from-black px-6">
      <div className="flex h-16 items-center justify-between">

        {/* Logo */}
        <img
          className="w-28 md:w-40"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="netflix-logo"
        />

        {/* Desktop Menu */}
        {user && (
          <div className="hidden md:flex items-center space-x-6">
            <p className="nav-item" onClick={browse}>Home</p>
            <p className="nav-item" onClick={shows}>Shows</p>
            <p className="nav-item" onClick={movies}>Movies</p>
            <p className="nav-item" onClick={games}>Games</p>
            <p className="nav-item" onClick={handleNew}>New & Popular</p>
            <p className="nav-item" onClick={lists}>My List</p>
            <p className="nav-item" onClick={language}>Browse by Languages</p>
          </div>
        )}

        {/* Right Section */}
        {user && (
          <div className="hidden md:flex items-center space-x-4">
            <IoMdArrowDropdown className="text-white text-xl" />
            <h5 className="text-white text-sm">{user.fullName}</h5>

            <button
              onClick={toggleHandler}
              className="bg-red-800 text-white px-3 py-1 rounded"
            >
              Search
            </button>

            <button
              onClick={logoutHandler}
              className="bg-red-700 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {user && (
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && user && (
        <div className="md:hidden flex flex-col space-y-3 pb-4">
          <p className="mobile-item" onClick={browse}>Home</p>
          <p className="mobile-item" onClick={shows}>Shows</p>
          <p className="mobile-item" onClick={movies}>Movies</p>
          <p className="mobile-item" onClick={games}>Games</p>
          <p className="mobile-item" onClick={handleNew}>New & Popular</p>
          <p className="mobile-item" onClick={lists}>My List</p>
          <p className="mobile-item" onClick={language}>Browse by Languages</p>

          <button
            onClick={toggleHandler}
            className="bg-red-800 text-white px-4 py-2 rounded"
          >
            Search Movie
          </button>

          <button
            onClick={logoutHandler}
            className="bg-red-700 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;