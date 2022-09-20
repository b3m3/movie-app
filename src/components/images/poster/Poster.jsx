import { POSTER_S } from '../../../constans/api';
import { roundNumber, getCardColors } from '../../../utils/utils';

import NoImage from './img/no-image.jpg';

import style from './poster.module.css';

const Poster = ({ hover, src, alt, vote_average }) => {
  return (
    <div 
      className={`
        ${style.poster} 
        ${hover ? style.hover : null} 
        ${vote_average && style[getCardColors(roundNumber(vote_average))]} `}
    >
      <img
        src={src ? POSTER_S+src : NoImage}
        alt={alt && alt}
      />
    </div>
  );
}

export default Poster;