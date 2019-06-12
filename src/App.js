import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlateInput from './components/PlateInput'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to NYC parking violation please enter a lic plate # 
        <PlateInput />
      
      
      </header>
    </div>
  );
}

export default App;
