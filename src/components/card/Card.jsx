import { Link } from 'react-router-dom';

import Poster from '../images/poster/Poster';
import Rating from '../rating/Rating';

import style from './card.module.css';

const Card = ({ pathTv, id, poster_path, title, name, vote_average }) => {
  return (
    <Link 
      to={`/${pathTv}${id}`}
      className={style.card}
    >
      <span className={style.rating}>
        <Rating data={vote_average} />
      </span>

      <Poster 
        src={poster_path}
        alt={title}
        hover={true}
      />

      <p className={style.title}>
        {title && title} {name && name}
      </p> 
    </Link>
  );
}

export default Card;