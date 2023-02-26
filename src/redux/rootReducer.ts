import { apiSlice } from '@/redux/slices/apiSlice';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import movie from './slices/movie';
import authReducer from "@/feature/auth"
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
  auth:authReducer,
  movie:persistReducer(productPersistConfig, movie),
  [apiSlice.reducerPath]: apiSlice.reducer,
})

export default rootReducer