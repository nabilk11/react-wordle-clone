import './App.css';
import { Gameboard } from './components/Gameboard/Gameboard';
import { Keyboard } from './components/Keyboard/Keyboard';
import { Nav } from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
     <Nav />
     <Gameboard />
     <Keyboard />
    </div>
  );
}

export default App;
