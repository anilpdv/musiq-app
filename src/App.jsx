import React from 'react';
import NavBar from './NavBar/NavBar.component';
import './App.css';
import Input from './Input/Input.component';
import Routes from './Routes/Routes';
import { RecentSongsProvider } from './context/RecentSongsContext';

function App() {
  return (
    <RecentSongsProvider>
      <div className="App bg-grey-100">
        <NavBar />
        <div className="main ml-39">
          <Routes />
        </div>
      </div>
    </RecentSongsProvider>
  );
}

export default App;
