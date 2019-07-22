import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Input from '../Input/Input.component';
import Playlist from '../Playlist/Playlist.component';
import Queue from '../Queue/Queue.component';
import Library from '../library/library.component';
import RecentSongsViewer from '../RecentSongsViewer/RecentSongsViewer.component';
import PlaylistViewer from '../PlaylistViewer/PlaylistViewer.component';
import ChartViewer from '../ChartViewer/ChartViewer.component';
import NewReleaseViewer from '../NewReleaseViewer/NewReleaseViewer.component';
import Generes from '../Generes/Generes.component';

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" render={props => <Playlist {...props} />} />
      <Route exact path="/search" render={props => <Input {...props} />} />
      <Route exact path="/queue" render={props => <Queue {...props} />} />
      <Route exact path="/library" render={props => <Library {...props} />} />
      <Route exact path="/recent" render={() => <RecentSongsViewer />} />
      <Route exact path="/liked" render={() => <Library />} />
      <Route exact path="/playlist" render={() => <PlaylistViewer />} />
      <Route exact path="/charts" render={() => <ChartViewer />} />

      <Route exact path="/newrelease" render={() => <NewReleaseViewer />} />
      <Route exact path="/geners" render={() => <Generes />} />
    </Switch>
  );
};

export default Routes;
