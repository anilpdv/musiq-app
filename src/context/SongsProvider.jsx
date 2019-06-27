import React, { useReducer, useEffect, createContext } from 'react';
import reducer from '../reducers/songs.reducer';
import { lyric } from '../musicPlayer/musicPlayer.component';
const defaultAudioLists = [{}];

export const SongsContext = createContext();
export const OptionsContext = createContext();
export function SongsProvider(props) {
  const [audioLists, dispatch] = useReducer(reducer, defaultAudioLists);
  return (
    <OptionsContext.Provider value={audioLists}>
      <SongsContext.Provider value={dispatch}>
        {props.children}
      </SongsContext.Provider>
    </OptionsContext.Provider>
  );
}
