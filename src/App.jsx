import React from 'react';
import model from './Redux/model';
import { StoreProvider, createStore } from 'easy-peasy';
import NavBar from './NavBar/NavBar.component';
import './App.css';
import Routes from './Routes/Routes';
import AudioPlayer from './AudioPlayer/AudioPlayer.component';

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <NavBar />
        <div className="main ml-39">
          <Routes />
        </div>
        <div className="musicPlayer">
          <AudioPlayer />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
