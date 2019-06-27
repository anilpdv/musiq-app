import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import { urls } from '../utils';
import { defaultProps } from 'recompose';
import './styles.css';

const options = {
  key: urls.key,
  chart: 'mostPopular',
  videoCategoryId: 10,
  part: 'snippet',
  maxResults: 20
};

const ImageSlider = props => {
  console.log(props);
  const [index, set] = useState(0);

  useEffect(() => {
    setInterval(() => set(state => (state + 1) % 20), 2000);
  }, []);

  const transitions = useTransition(props.images[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opactiy: 0 },
    config: config.molasses
  });

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="bg"
      style={{ ...props, backgroundImage: `url(${item.image})` }}
    />
  ));
};
const images = [
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

const withDefaultProps = defaultProps({ images });
export default withDefaultProps(ImageSlider);
