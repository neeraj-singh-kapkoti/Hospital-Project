import './App.css';
import React from "react"; 
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import HomeP from './pages/HomeP';
import ServiceList from './pages/ServiceP/ServicesList';
import SingleP from './pages/ServiceP/SingleP';
import TestList from './pages/TestP/TestList';
import Lists from './pages/OtherP/Lists';
import Page1 from './pages/OtherP/Page1';
import Test1 from './pages/TestP/Test1';
import Test2 from './pages/TestP/Test2';
import Page2 from './pages/OtherP/page2';
import Councilling from './pages/CouncillingP/CouncillingList';
import CouncillingP from './pages/CouncillingP/CouncillingP';
import DoctorL from './pages/Doctors/DoctorL';
import About from './pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeP/>} />
      </Routes>
      <Routes>
        <Route path="/DoctorList" exact element={<DoctorL/>} />
      </Routes>
      <Routes>
        <Route path="/service" element={<ServiceList/>} />
      </Routes>
      <Routes>
        <Route path="/servicePage" element={<SingleP/>} />
      </Routes>
      <Routes>
        <Route path="/others" element={<Lists/>} />
      </Routes>
      <Routes>
        <Route path="/others/Test" element={<Page1/>} />
      </Routes>
      <Routes>
        <Route path="/others/Test2" element={<Page2/>} />
      </Routes>
      <Routes>
        <Route path="/test" element={<TestList/>} />
      </Routes>
      <Routes>
        <Route path="test/test1" element={<Test1/>} />
      </Routes>
      <Routes>
        <Route path="test/test2" element={<Test2/>} />
      </Routes>
      <Routes>
        <Route path="/counselling" element={<Councilling/>} />
      </Routes>
      <Routes>
        <Route path="/councillingP" element={<CouncillingP/>} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
