import './App.css';
import React from "react"; 
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import HomeP from './pages/HomeP';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeP/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
