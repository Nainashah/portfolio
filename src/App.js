import React from "react";
import Home from "./Pages/Home";
import "./index.css";

import {Routes, Route} from 'react-router-dom';
import Services from "./Pages/Services";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";



const App = () => {
  return <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Services" element={<Services />}/>
    <Route path="/Skills" element={<Skills />}/>
    <Route path="/Contact" element={<Contact />}/>
  </Routes>;
};

export default App;
