import './App.css';
import { Body } from './components/Body/Body';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar className="flex bg-white border-b-2"/>
      <Body className="pl-64 pr-64 m-2 flex"/>
    </div>
  )
}

export default App;
