import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
    </div>
  );
}

export default App;
