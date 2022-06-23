import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { 
//   BrowserRouter,
//   Routes,
//   Route,
// } from 'react-router-dom';
import ActorApp from "./ActorApp"
// import FilmApp from "./routes/FilmApp"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  // <Routes>
  //   <Route path='/' element={<ActorApp />} />
  //   <Route path="FilmApp" element={<FilmApp />} />
  //  </Routes>
  <React.StrictMode>
    <ActorApp />
  </React.StrictMode>
  // </BrowserRouter>
);

reportWebVitals();
