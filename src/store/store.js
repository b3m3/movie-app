import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { favoriteReduces } from './reducers/favoriteReduces';
import { setLStorage } from '../utils/localStorage';

const reducer = combineReducers({ favoriteReduces })
const store = configureStore({ reducer });

store.subscribe(() => {
  setLStorage('mdbfavorite', store.getState().favoriteReduces);
});

export default store;