import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./component/Home.jsx";
import Contact from './component/Contact';
import Food from './component/Food'
import About from './component/About';
import Coustomer from './component/Coustomer';
import Post from './component/Post';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children: [
   {
    path:'/contact',
    element:<Contact></Contact>
    
  },
  {
    path:'/food',
    
    element:<Food></Food>

  },
  {
    path:'/Customer',
    loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
    element:<Coustomer></Coustomer>
  }, {
    path:'/post',
    element:<Post></Post>
  }, 
 { path:'/about',
  element:<About></About>}
]}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
</React.StrictMode>,
)
