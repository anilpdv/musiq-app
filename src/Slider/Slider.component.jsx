import React, { useState, useEffect } from 'react';
import { urls } from '../utils';
import axios from 'axios';
import ImageSlider from '../ImageSlider/ImageSlider.component';
import { defaultProps } from 'recompose';
import './Slider.component.css';

const options = {
  key: urls.key,
  chart: 'mostPopular',
  videoCategoryId: 10,
  part: 'snippet',
  maxResults: 20
};
const defaultStateImages = [
  {
    image: 'https://i.ytimg.com/vi/Dkk9gvTmCXY/hqdefault.jpg',
    id: 'Dkk9gvTmCXY'
  },
  {
    image: 'https://i.ytimg.com/vi/xxZQqBW0hcc/hqdefault.jpg',
    id: 'xxZQqBW0hcc'
  },
  {
    image: 'https://i.ytimg.com/vi/oOni4BMeMp0/hqdefault.jpg',
    id: 'oOni4BMeMp0'
  }
];

function Slider(props) {
  const [images, setImages] = useState([...defaultStateImages]);
  useEffect(() => {
    async function getData() {
      let image = {};
      let images = [];
      const resp = await axios.get(`${urls.baseUrl}/videos`, {
        params: options
      });
      console.log('hello world');

      resp.data.items.map(item => {
        image = {
          image: item.snippet.thumbnails.high.url,
          id: item.id
        };
        images.push(image);
      });
      setImages(images);
      console.log(images);
    }
    getData();
  }, []);
  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
}

export default Slider;
