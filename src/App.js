import { useState } from 'react';
import { supabase } from './supabaseClient';
//import logo from './logo.svg';
import './App.css';

function Gallery() {
  const[myImages, setMyImages] = useState([]);
  async function getImages() {
    let { data: images, error } = await supabase 
      .from('images')
      .select('*')
    setMyImages(images); 
  }
  getImages();
  return (
    <div>
      {
        myImages.map(b => (
        
            <><p>{b.title}</p><p>
            <img src={b.image}></img>
          </p></>
          
        ))
      }
    </div>
  )
}


function RandomButton() {
  const [myImages, setMyImages] = useState([]);
  async function randomPhoto() {
    let { data: images, error } = await supabase
    .from ('images')
    .select(1)
    .order('random()')
  setMyImages(images);
  }
  randomPhoto()
  return (
    <>
    <h3>Click Here for a Random Photo</h3>
    <button onClick={randomPhoto}>random</button>
    {myImages && (
        <img
          src={randomPhoto}
          alt="random"
        />
      )}
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Flower Gallery </h1>
        <Gallery/>
        <RandomButton/>
      </header>
      
    </div>
  );
}

export default App;
