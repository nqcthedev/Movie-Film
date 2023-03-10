// LAYOUT
// ----------------------------------------------------------------------

import { PATH_DASHBOARD } from "./routes/path";


export const FIREBASE_API = {
  apiKey: "AIzaSyCDkOlRQaBrJkJU1i202Lk3vtdikGJIopY",
  authDomain: "movie-social-e755e.firebaseapp.com",
  projectId: "movie-social-e755e",
  storageBucket: "movie-social-e755e.appspot.com",
  messagingSenderId: "480883635709",
  appId: "1:480883635709:web:87ccfed561ba9b2bc85594",
  measurementId: "G-KDLSPBFH0N"
};

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = PATH_DASHBOARD.root; // as '/app'

export const HEADER = {
  H_MOBILE: 64,
  H_MAIN_DESKTOP: 88,
  H_DASHBOARD_DESKTOP: 92,
  H_DASHBOARD_DESKTOP_OFFSET: 92 - 32,
};

export const NAV = {
  W_BASE: 260,
  W_DASHBOARD: 280,
  W_DASHBOARD_MINI: 88,
  //
  H_DASHBOARD_ITEM: 48,
  H_DASHBOARD_ITEM_SUB: 36,
  //
  H_DASHBOARD_ITEM_HORIZONTAL: 32,
};

export const ICON = {
  NAV_ITEM: 24,
  NAV_ITEM_HORIZONTAL: 22,
  NAV_ITEM_MINI: 22,
};