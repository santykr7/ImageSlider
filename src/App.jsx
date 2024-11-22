import { useEffect, useState } from 'react';

import './App.css';
import ImageSlider from './component/ImageSlider';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setImages(data?.recipes);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  return (
    <>
      <h1>Image Slider</h1>
      {images.length > 0 ? (
        <ImageSlider images={images} /> 
      ) : (
        <p>Loading images...</p>
      )}
    </>
  );
}

export default App;
