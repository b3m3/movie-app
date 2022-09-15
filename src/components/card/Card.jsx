import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Poster from '../images/poster/Poster';
import Rating from '../rating/Rating';
import { roundNumber } from '../../utils/utils';

import style from './card.module.css';

const Card = ({ pathTv, id, poster_path, title, name, vote_average }) => {
  const [color, setColor] = useState([]);

  useEffect(() => {
    setColor(
      roundNumber(vote_average) >= 8 ? 'green' 
      : roundNumber(vote_average) >= 7 ? 'yellowGreen' 
      : roundNumber(vote_average) >= 6 ? 'yellow' 
      : roundNumber(vote_average) >= 5 ? 'orange' 
      : 'red');
  }, [vote_average]);
  
  return (
    <Link 
      to={`/${pathTv}${id}`}
      className={style.card}
    >
      <span className={style.rating}>
        <Rating 
          data={vote_average} 
          color={color}
        />
      </span>

      <Poster 
        src={poster_path}
        alt={title}
        hover={true}
        hoverColor={color}
      />

      <p className={style.title}>
        {title && title} {name && name}
      </p> 
    </Link>
  );
}

export default Card;