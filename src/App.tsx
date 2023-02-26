
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Router from "./app/routes";
import { useRef } from "react";
import {Provider as ReduxProvider} from "react-redux"
import { HelmetProvider } from "react-helmet-async";
import { persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  const alanBtnContainer = useRef<any>();
  return (
    <BrowserRouter>
      <CssBaseline />
      <Router />
      <div ref={alanBtnContainer}/>
    </BrowserRouter>
  );
}

export default App;
