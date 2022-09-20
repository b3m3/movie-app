import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Poster from '../images/poster/Poster';
import Rating from '../rating/Rating';
import { setMovieToFavorite, removeMovieFromFavorite } from '../../store/actions/index';

import { MdFavorite } from 'react-icons/md';

import style from './card.module.css';

const Card = ({ pathTv, id, poster_path, title, name, vote_average }) => {
  const [favorite, setFavorite] = useState(false);

  const storeData = useSelector(store => store.favoriteReduces);
  const dispatch = useDispatch();

  const addMovie = () => {
    dispatch(setMovieToFavorite({
        [id]: { title, name, poster_path, vote_average }
    }));
  };

  const removeMovie = () => {
    dispatch(removeMovieFromFavorite(id));
  };

  useEffect(() => {
    storeData[id] ? setFavorite(true) : setFavorite(false)
  }, [favorite, storeData]);

  return (
    <div className={style.card} >
      <span className={style.rating}>
        <Rating 
          data={vote_average}
        />
      </span>

      <span
        className={style.favorite}
        style={favorite ? {color: 'orange'} : null}
        onClick={favorite ? removeMovie : addMovie}
      >
        <MdFavorite />
      </span>

      <Link to={`/${pathTv}${id}`}>
        <Poster 
          src={poster_path}
          alt={title}
          hover={true}
          vote_average={vote_average}
        />
      </Link>

      <p className={style.title}>
        {title && title} {name && name}
      </p> 
    </div>
  );
}

export default Card;