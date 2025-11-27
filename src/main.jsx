import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Viewstory from './viewstory.jsx';
import Profile from './profile.jsx';
import Explore from './explore.jsx';
import { Reels, Search ,Messages,Notification,Create,More} from './common page.jsx';
import Edit from './edit.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/story/:id/:tot',
    element: <Viewstory />
  },
  {
    path:'/profile',
    element:<Profile />
  },
  {
    path:'/explore',
    element:<Explore />
  },
  {
    path:'/reels',
    element:<Reels />
  },
  {
    path:'/search',
    element:<Search />
  },
  {
    path:'/messages',
    element:<Messages />
  },
  {
    path:'/notifications',
    element:<Notification />
  },
  {
    path:'/create',
    element:<Create />
  },
  {
    path:'/more',
    element:<More />
  },
  {
    path:'/edit',
    element:<Edit />
  }
]);

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
