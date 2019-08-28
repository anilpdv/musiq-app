import React, {useState} from 'react';
import Axios from 'axios';

import Entities from 'html-entities';
import SongsList from '../SongsList/SongsList.component';
import './Input.component.css';

const entities = new Entities.XmlEntities();

function removeTitle(songs) {
  const filteredSongs = songs.filter(item => {
    let query = item.snippet.title;
    query = entities.decode(query);
    query = query.split('-');

    let title = query[1] ? query[1].replace(/\(.*?\)/g, '') : '';
    if (title !== '') {
      return true;
    } else {
      return false;
    }
  });
  return filteredSongs;
}

const baseUrl = 'https://warm-springs-86808.herokuapp.com';
const Input = props => {
  const [value, setValue] = useState('');

  const [songs, setSongs] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    async function getData() {
      const resp = await Axios.get(`${baseUrl}/api/search/${value}`);
      console.log(resp.data);

      setSongs(removeTitle(resp.data.items));
    }
    getData();
    setValue('');
  };
  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div className="text-center  ">
      <div className="Search ">
        <form
          action="
    "
          onSubmit={handleSubmit}>
          <input
            id="docsearch"
            className="transition  shadow-md   outline-none  border  border-transparent    appearance-none leading-normal ds-input "
            aria-label="search input"
            placeholder="search for songs...."
            onChange={handleChange}
            value={value}
          />
        </form>
      </div>
      <div className="SongsList">
        <SongsList songs={songs} />
      </div>
    </div>
  );
};

export default Input;
