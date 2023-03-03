import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";

import { persistStore, persistReducer } from "redux-persist";
import rootReducer, { rootPersistConfig } from "./rootReducer";
import { apiSlice } from "@/redux/slices/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


// ------------------------------------------------------

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(apiSlice.middleware)
});

setupListeners(store.dispatch)

const persistor = persistStore(store)

const {dispatch} = store;

const useSelector:TypedUseSelectorHook<RootState> = useAppSelector

const useDispatch = () => useAppDispatch<AppDispatch>();

export {store, persistor, dispatch, useSelector, useDispatch}

