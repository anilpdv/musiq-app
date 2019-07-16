import React, { useReducer, useEffect, createContext } from 'react';
import reducer from '../reducers/songs.reducer';
import { lyric } from '../musicPlayer/musicPlayer.component';
let defaultAudioLists = [{}];

export const SongsContext = createContext();
export const SongsTwoContext = createContext();
export const OptionsContext = createContext();
export function SongsProvider(props) {
  const [audioLists, dispatch] = useReducer(reducer, defaultAudioLists);

  defaultAudioLists = audioLists;
  return (
    <SongsContext.Provider value={dispatch}>
      <SongsTwoContext.Provider value={dispatch}>
        <OptionsContext.Provider value={audioLists}>
          {props.children}
        </OptionsContext.Provider>
      </SongsTwoContext.Provider>
    </SongsContext.Provider>
  );
}
