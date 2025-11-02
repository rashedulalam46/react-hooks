import logo from './logo.svg';
import './App.css';
import UseState from './pages/UseState';
import UseEffect from './pages/UseEffect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* uncomment this to show useEffect component */}
        <UseEffect />

        {/* uncomment this to show useState component */}
        <UseState />
      </header>
    </div>
  );
}

export default App;
