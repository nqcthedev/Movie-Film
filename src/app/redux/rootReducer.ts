import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import movie from './slices/movie';

//----

export const rootPersistConfig = {
  key:'root',
  storage,
  keyPrefix: 'redux-',
  whiteList: [],
}

export const productPersistConfig = {
  key:'product',
  storage,
  keyPrefix: 'redux-',
  whileList: ['sortBy', 'checkout'],
}

const rootReducer = combineReducers({
  movie:persistReducer(productPersistConfig, movie)
})

export default rootReducer