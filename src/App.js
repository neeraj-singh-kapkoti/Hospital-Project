import './App.css';
import React from "react"; 
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import HomeP from './pages/HomeP';
import ListP from './pages/ListP';
import SingleP from './pages/SingleP';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeP/>} />
      </Routes>
      <Routes>
        <Route path="/service" element={<ListP/>} />
      </Routes>
      <Routes>
        <Route path="/blog1" element={<SingleP/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
