
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Router from "./app/routes";
import { useRef } from "react";

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
