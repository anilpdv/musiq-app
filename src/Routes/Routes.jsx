import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Input from '../Input/Input.component';
import Playlist from '../Playlist/Playlist.component';
import Queue from '../Queue/Queue.component';
import Library from '../library/library.component';
import RecentSongsViewer from '../RecentSongsViewer/RecentSongsViewer.component';

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" render={props => <Playlist {...props} />} />
      <Route exact path="/search" render={props => <Input {...props} />} />
      <Route exact path="/queue" render={props => <Queue {...props} />} />
      <Route exact path="/library" render={props => <Library {...props} />} />
      <Route exact path="/recent" render={() => <RecentSongsViewer />} />
      <Route exact path="/liked" render={() => <Library />} />
    </Switch>
  );
};

export default Routes;
