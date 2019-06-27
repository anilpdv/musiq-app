import React from 'react';
import NavBar from './NavBar/NavBar.component';
import './App.css';
import Input from './Input/Input.component';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className="App bg-grey-100">
      <NavBar />
      <div className="main ml-39">
        <Routes />
      </div>
    </div>
  );
}

export default App;
