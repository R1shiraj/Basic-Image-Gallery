import { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

export default function App(){
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=37814946-9cbcf2dea2f1227a1dcc8233a&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err))
  }, [term]);

  return(
    <div className=" container m-auto">

      <ImageSearch onSearch={text => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-center text-4xl text-gray-500 font-bold tracking-wider mt-8">No Images Found...</h1>}

      {isLoading ? <h1 className="text-center text-6xl font-bold tracking-wider mt-8">Loading...</h1> : <div className="grid grid-cols-3 gap-10 justify-center">
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  );
}