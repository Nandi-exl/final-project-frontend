import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Foods from "./Components/Food/Food";
import Breakfast from "./Components/Food/Breakfast";
import Lunch from "./Components/Food/Lunch";
import Dinner from "./Components/Food/Dinner";
import Beverages from "./Components/Beverage/Beverage";
import Alcohol from "./Components/Beverage/Alcohol";
import NonAlcohol from "./Components/Beverage/NonAlcohol";
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
          <Route path="/foods" element={<Foods/>}/>
          <Route path="/foods/breakfast" element={<Breakfast/>}/>
          <Route path="/foods/lunch" element={<Lunch/>}/>
          <Route path="/foods/dinner" element={<Dinner/>}/>
          <Route path="/beverages" element={<Beverages/>}/>
          <Route path="/beverages/alcohol" element={<Alcohol/>}/>          
          <Route path="/beverages/non-alcohol" element={<NonAlcohol/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
