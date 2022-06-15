import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
// import About from "./Components/About";
import Food from "./Components/Food/Food";
import Beverage from "./Components/Beverage/Beverage";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/food" element={<Food/>}/>
          <Route path="/beverage" element={<Beverage/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
