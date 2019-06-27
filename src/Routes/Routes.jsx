import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SongsList from '../SongsList/SongsList.component';
import { SongsProvider } from '../context/SongsProvider';
import Input from '../Input/Input.component';

import MusicPlayer, { options } from '../musicPlayer/musicPlayer.component';

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Input />} />
    </Switch>
  );
};

export default Routes;
