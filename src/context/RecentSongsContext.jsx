import React, { createContext } from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import recentlyPlayedReducer from '../reducers/recentlyPlayedSongs.reducer';

export const DispatchContext = createContext();
export const RecentSongsContext = createContext();

const defaultVal = [];

export function RecentSongsProvider(props) {
  const [recentSongs, dispatch] = useLocalStorageReducer(
    'songs',
    defaultVal,
    recentlyPlayedReducer
  );

  return (
    <RecentSongsContext.Provider value={recentSongs}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </RecentSongsContext.Provider>
  );
}
