import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import movieReducer from './movie';


// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

export const moviePersistConfig = {
  key: 'movie',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['favourite'],
};

const rootReducer =  persistReducer(moviePersistConfig, movieReducer)

export default rootReducer;
