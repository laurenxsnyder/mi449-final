import logo from './logo.svg';
import './App.css';

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
        <RandomButton/>
      </header>
      
    </div>
  );
}

export default App;
