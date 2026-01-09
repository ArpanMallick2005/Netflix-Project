import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './Login.jsx';
import Browse from './Browse.jsx';
import Search from './Search.jsx';
import Movies from './Movies.jsx';
import Games from './Games.jsx';
import News from './News.jsx';
import Language from './Language.jsx';
import Shows from './Shows.jsx';
import MyList from './MyList.jsx';

const Body = () => {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    },
    {
      path:"/Search",
      element:<Search/>
    },
    {
      path:"/browse/movies",
      element:<Movies/>
    },
    {
      path:"/browse/games",
      element:<Games/>
    },
    {
      path:"/browse/new",
      element:<News/>
    },
    {
      path:"/browse/language",
      element:<Language/>
    },
    {
      path:"/browse/shows",
      element:<Shows/>
    },
    {
      path:"/browse/list",
      element:<MyList/>
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;