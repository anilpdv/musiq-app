import {action, thunk} from 'easy-peasy';
import {transformPlayable, transformPlaylistPlayable} from '../utils/helper';
import Axios from 'axios';

export default {
  recentSongs: [],
  audioLists: [],
  favourites: [],
  // thunks
  LoadLocalStorageData: thunk(async (actions, payload) => {
    let val;
    try {
      val = await JSON.parse(window.localStorage.getItem('songs'));
      console.log('try', val);
      actions.addRecentSongs(val);
      actions.fetchSongs({
        id: val[0].id,

        song: val[0],
      });
    } catch (e) {
      console.log('error val');
      val = [];
    }
    console.log('val', val);
  }),
  loadLocalStorageFavourites: thunk(async (actions, payload) => {
    let favourites;
    try {
      favourites = await JSON.parse(window.localStorage.getItem('favourites'));

      actions.addFavourites(favourites);
    } catch (e) {
      favourites = [];
    }
  }),
  fetchSongs: thunk(async (actions, payload) => {
    const res = await Axios(
      'https://warm-springs-86808.herokuapp.com/api/related/' + payload.id,
    );
    let songs = await res.data;
    songs = transformPlayable(songs.items);
    songs.unshift(payload.song);
    actions.addSongs(songs);
  }),
  fetchPlaylist: thunk(async (actions, payload) => {
    const res = await Axios(
      'https://warm-springs-86808.herokuapp.com/api/playlist/' +
        payload.playlistId,
    );
    let songs = await res.data.playlist;
    songs = transformPlaylistPlayable(songs);
    actions.addSongs(songs);
  }),

  // Actions
  addRecentSongs: action((state, songs) => {
    state.recentSongs = [...songs];
  }),
  addFavourites: action((state, favourites) => {
    state.favourites = [...favourites];
  }),
  addSongsToLocalStorage: action((state, songs) => {
    state.recentSongs = [...songs, ...state.recentSongs];
    console.log('addsongstolocalstorage', state.recentSongs);
    window.localStorage.setItem('songs', JSON.stringify(state.recentSongs));
  }),
  addFavouritesToLocalStorage: action((state, favourites) => {
    state.favourites = [...favourites, ...state.favourites];
    window.localStorage.setItem('favourites', JSON.stringify(state.favourites));
  }),
  addSongs: action((state, songs) => {
    state.audioLists = [...songs];
  }),
};
