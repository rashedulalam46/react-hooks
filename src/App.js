import logo from './logo.svg';
import './App.css';
import UseState from './pages/UseState';
import UseEffect from './pages/UseEffect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseEffect />
        <UseState />
      </header>
    </div>
  );
}

export default App;
