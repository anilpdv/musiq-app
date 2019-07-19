import React, { useState } from 'react';

import './NewReleaseViewer.component.css';
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

function NewReleaseViewer() {
  return (
    <div className="ChartViewer">
      <div className="ChartViewer-container">
        <div className="ChartViewer-featured-title">
          <h1>Featured</h1>
        </div>
        <div className="ChartViewer-featured-list">
          <PlaylistViewer img={TopGlobal} PlaylistId="fjalfjaflj" />

          <PlaylistViewer img={FeelGood} PlaylistId="" />

          <PlaylistViewer
            img={Songs2019}
            PlaylistId="RDCLAK5uy_nBEdHzqYAWsXbU7emO-2Q2SYHSmGxxPaI"
          />

          <PlaylistViewer img={HipPop} PlaylistId="fjalfjaflj" />
        </div>
        <div className="ChartViewer-countryCharts-title">
          <h1>Top Songs By Countries</h1>
        </div>
        <div className="ChartViewer-featured-list">
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
        <div className="ChartViewer-countryCharts-title">
          <h1>All Time Hits</h1>
        </div>
        <div className="ChartViewer-featured-list">
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

export default NewReleaseViewer;
