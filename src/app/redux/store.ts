import { useDispatch, useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";

import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";

import { persistStore, persistReducer } from "redux-persist";
import rootReducer, { rootPersistConfig } from "./rootReducer";
import { apiSlice } from "@/store/apiSlice";

// ------------------------------------------------------

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
const presistReducer = persistReducer(rootPersistConfig, rootReducer);
const store = configureStore({
  reducer: presistReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
