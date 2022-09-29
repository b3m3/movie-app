import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../loading';
import Rating from '../rating';
import FavoriteButton from '../ui/favoriteButton';

import style from './card.module.css';

const Poster = lazy(() => import('../images/poster'));

const Card = ({ pathTv, id, poster_path, title, name, vote_average }) => {

  return (
    <div className={style.card} >
      <span className={style.rating}>
        <Rating 
          data={vote_average}
        />
      </span>

      <FavoriteButton
        id={id}
        pathTv={pathTv}
        poster_path={poster_path}
        title={title}
        name={name}
        vote_average={vote_average}
      />

      <Link to={`/${pathTv}${id}`}>
        <Suspense fallback={<Loading spin />}>
          <Poster 
            src={poster_path}
            alt={title}
            hover={true}
            vote_average={vote_average}
          />
        </Suspense>
      </Link>

      <p className={style.title}>
        {title && title} {name && name}
      </p> 
    </div>
  );
}

export default Card;