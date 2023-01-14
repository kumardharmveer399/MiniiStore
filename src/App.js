import React from 'react';
import './App.css';
import Api from './Components/ImdApi';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import Footer from './Components/Footer';
import Shope from './Components/Shope';
import Blog from './Components/Blog';
import About from './Components/About';
import Contact from './Components/Contact';
import { Route } from 'react-router-dom';
import {
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Api/> */}
      <Navbar />
          <Routes> 
              <Route path='/' element={<Home/>}  />
              <Route path='shope' element={<Shope/>}  />
              <Route path='blog' element={<Blog/>}  />
              <Route path='about' element={<About/>}  />
              <Route path='contact' element={<Contact/>}  />
          </Routes>

      <Footer />
    </>
  );
}

export default App;
