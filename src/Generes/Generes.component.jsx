import React, { useState } from 'react';

import './Generes.component.css';
import PlaylistViewer from '../PlaylistViewer/PlaylistViewer.component';
import TopGlobal from '../assets/TOP100Global.jpeg';
import FeelGood from '../assets/FeelGood.jpg';
import Songs2019 from '../assets/Songs2019.jpg';
import HipPop from '../assets/HIPPOP.jpg';
import TopUs from '../assets/TOPUS.jpg';
import TopUk from '../assets/TOPUK.jpg';
import TopCanada from '../assets/TOPCANADA.jpg';
import TopIndia from '../assets/TOPINDIA.jpg';
import AllInternational from '../assets/INTERNATIONALHITS.jpg';
import AllPop from '../assets/ALLPOP.jpg';
import AllRomance from '../assets/ALLROmance.jpg';
import GenresPop from '../assets/GenresPop.jpg';
import GenresHipPop from '../assets/GenresHipPop.jpg';
import GenresEDm from '../assets/GenresEDm.jpg';
import GenresCountry from '../assets/GenresCountry.jpg';
import GenresRB from '../assets/GenresR&B.jpg';
import GenresRock from '../assets/GenresROCK.jpg';
import Genresjazz from '../assets/Genresjazz.jpg';

function Generes() {
  return (
    <div className="Geners">
      <div className="Geners-container">
        <div className="Geners-featured-title">
          <h1>Featured</h1>
        </div>
        <div className="Geners-featured-list">
          <PlaylistViewer img={GenresPop} PlaylistId="fjalfjaflj" />
          <PlaylistViewer img={GenresHipPop} PlaylistId="fjalfjaflj" />

          <PlaylistViewer img={GenresCountry} PlaylistId="" />

          <PlaylistViewer
            img={GenresEDm}
            PlaylistId="RDCLAK5uy_nBEdHzqYAWsXbU7emO-2Q2SYHSmGxxPaI"
          />

          <PlaylistViewer img={Genresjazz} PlaylistId="fjalfjaflj" />

          <PlaylistViewer img={GenresRB} PlaylistId="fjalfjaflj" />

          <PlaylistViewer img={GenresRB} PlaylistId="fjalfjaflj" />

          <PlaylistViewer img={GenresRock} PlaylistId="fjalfjaflj" />
        </div>
        <div className="Geners-countryCharts-title">
          <h1>Top Songs By Countries</h1>
        </div>
        <div className="Geners-featured-list">
          <PlaylistViewer img={TopUs} PlaylistId="" />
          <PlaylistViewer
            img={TopCanada}
            PlaylistId="RDCLAK5uy_nBEdHzqYAWsXbU7emO-2Q2SYHSmGxxPaI"
          />
          <PlaylistViewer img={TopUk} PlaylistId="fjalfjaflj" />
          <PlaylistViewer
            img={TopIndia}
            PlaylistId="RDCLAK5uy_nBEdHzqYAWsXbU7emO-2Q2SYHSmGxxPaI"
          />{' '}
        </div>
        <div className="Geners-countryCharts-title">
          <h1>All Time Hits</h1>
        </div>
        <div className="Geners-featured-list">
          <PlaylistViewer img={AllInternational} PlaylistId="" />
          <PlaylistViewer
            img={AllPop}
            PlaylistId="RDCLAK5uy_nBEdHzqYAWsXbU7emO-2Q2SYHSmGxxPaI"
          />
          <PlaylistViewer img={AllRomance} PlaylistId="fjalfjaflj" />
        </div>
      </div>
    </div>
  );
}

export default Generes;
