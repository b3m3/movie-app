import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeMovieFromFavorite, setMovieToFavorite } from '../../../store/actions';

import { MdFavorite } from 'react-icons/md';

import style from './favorite-button.module.css';

const Favorite = ({ id, title, name, poster_path, vote_average }) => {
  const [favorite, setFavorite] = useState(false);

  const storeData = useSelector(store => store.favoriteReduces);
  const dispatch = useDispatch();

  useEffect(() => {
    storeData[id] ? setFavorite(true) : setFavorite(false)
  }, [favorite, storeData, id]);

  const addMovie = () => {
    dispatch(setMovieToFavorite({
        [id]: { title, name, poster_path, vote_average }
    }));
  };

  const removeMovie = () => {
    dispatch(removeMovieFromFavorite(id));
  };

  return (
    <button
      className={style.favorite}
      style={favorite ? {color: 'orange'} : null}
      onClick={favorite ? removeMovie : addMovie}
    >
      <MdFavorite />
    </button>
  );
}

export default Favorite;