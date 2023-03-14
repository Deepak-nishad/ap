import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home';


import {createBrowserRouter, RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
  path:"/about",
  element:<About/>,
},
{
  path:"/contact",
  element:<Contact/>,
},

{
  path:"/home",
  element:<Home/>,
},
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
