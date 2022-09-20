import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { favoriteReduces } from './reducers/favoriteReduces';

const reducer = combineReducers({ favoriteReduces })
const store = configureStore({ reducer });

export default store;