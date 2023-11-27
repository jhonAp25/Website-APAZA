import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './assets/styles/global.css';
import { routers  } from "./routers/configRouters";
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);
