import React from 'react';
import './App.css';
import Gallery from './Components/Gallery';
import Sidebar from './Components/Sidebar'
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Gallery/>
    </div>
  );
}

export default App;
