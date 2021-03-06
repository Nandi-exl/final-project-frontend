<<<<<<< HEAD
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
=======
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
>>>>>>> main

function App() {
  const [images, setImages] = useState([]);
  const [foods, setFood] = useState([]);
  const [category, setCategory] = useState('');

  const data = async () => {
    const foods = await axios.get(`http://localhost:5000/food/1`);
    setFood(foods.data[0]);
    setCategory(foods.data[0].category.category);
    setImages(foods.data[0].foodImages);
  };
  
  useEffect(() => {
    data();
  }, []);

  return (
<<<<<<< HEAD
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
=======
    <div className='App'>
      <h1>{foods.foodName}</h1>
      <p>{foods.description}</p>
      <p>{category}</p>
      {images.map((img) => {
        const { id, image } = img;
        return (
          <>
            <div key={id}>
              <img
                src={image}
                alt={image}
              />
            </div>
          </>
        );
      })}
>>>>>>> main
    </div>
  );
}

export default App;
