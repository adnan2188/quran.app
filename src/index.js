import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
// Bootstrap link
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Layout from './Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx'
import SurahCards from './pages/Surah/SurahCards.jsx';
import JuzCards from './pages/Juz/JuzCards.jsx';
import JuzData from './pages/Juz/JuzData.jsx';
import Juz_translation from './pages/Translation_pages/Juz_translation.jsx'
import SurahData from './pages/Surah/SurahData.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "SurahCards",
        element: <SurahCards />
      },
      {
        path: "SurahData/:id",
        element: <SurahData />
      },
      {
        path: "JuzCards",
        element: <JuzCards />
      },
      {
        path: "JuzData/:id",
        element: <JuzData />
      },
      {
        path: "Juz-translation/:id",
        element: <Juz_translation />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
