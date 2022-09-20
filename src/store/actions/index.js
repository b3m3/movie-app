import { ADD_MOVIE_TO_FAVORITE, REMOVE_MOVIE_FROME_FAVORITE } from "../constans/actionTypes";

export const setMovieToFavorite = movie => ({
  type: ADD_MOVIE_TO_FAVORITE,
  payload: movie
});

export const removeMovieFromFavorite = id => ({
  type: REMOVE_MOVIE_FROME_FAVORITE,
  payload: id
});