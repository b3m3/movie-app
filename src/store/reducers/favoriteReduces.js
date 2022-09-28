import { omit } from 'lodash';

import { ADD_MOVIE_TO_FAVORITE, REMOVE_MOVIE_FROME_FAVORITE } from "../constans/actionTypes";
import { getLStorage } from '../../utils/localStorage';

const lStorageData = getLStorage('mdbfavorite');
const initialState = lStorageData;

export const favoriteReduces = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_TO_FAVORITE:
      return {
        ...state,
        ...action.payload
      };
    case REMOVE_MOVIE_FROME_FAVORITE:
      return omit(
        state, [action.payload]
      );
  
    default:
      return state;
  }
};
