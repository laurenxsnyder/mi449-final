import { supabase } from '.supabaseClient';
import logo from './logo.svg';
import './App.css';

const images = [
  {id: 1, title: 'image 1'},
  {id: 2, title: 'image 2'},
  {id: 3, title: 'image 3'}
];

function Images() {
  const listImages = images.map(pic =>
    <li 
    key={pic.id}
    style={{
      color: 'pink'
    }}
    >
      {pic.title}
      </li>
   );
   return (
    <ul>{listImages}</ul>
   )
}

const book = {
  title: 'title here',
  author: 'author here',
  published: 'pubbed here',
  image: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&w=1500&dpr=2',
  width: '264',
  height: '378'
};

function Gallery() {
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + 'cover'}
        style={{
          width:book.width,
          height: book.height
        }}
        />
    </div>
  );
}

function RandomButton() {
  return (
    <>
    <h3>Click Here for a Random Photo</h3>
    <button>random</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gallery/>
        <Images/>
        <RandomButton/>
      </header>
      
    </div>
  );
}

export default App;
