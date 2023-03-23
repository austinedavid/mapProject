import React, {useState} from 'react';
import './App.css';
import Map from './components/Map';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  // this state controls the opening and closing of the sidebar
  const[open, setopen] = useState<boolean>(true)
  return (
    <div className="App">
      <Navbar open={open} setopen={setopen}/>
      <div className='down-container'>
        <Sidebar/>
        <Map/>
      </div>
    </div>
  );
}

export default App;
