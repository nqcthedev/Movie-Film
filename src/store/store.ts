import {configureStore} from "@reduxjs/toolkit"

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import genreOrCategoryReducer from "../feature/currentGenreOrCategory"
import authSlice from "../feature/auth" 
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware: () => string | any[]) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


