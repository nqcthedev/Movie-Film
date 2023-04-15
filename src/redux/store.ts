import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { movieApiSlice } from "../services/apiStore";
import movieReducer from "@/redux/slices/movie";
import rootReducer from "./slices/rootReducer";
import { persistStore } from "redux-persist";
// ------------------------------------------------------

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
const store = configureStore({
  reducer: {
    persisted: rootReducer,
    [movieApiSlice.reducerPath]: movieApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(movieApiSlice.middleware),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

const { dispatch } = store;

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

const useDispatch = () => useAppDispatch<AppDispatch>();

export { store, dispatch, useSelector, useDispatch, persistor };
