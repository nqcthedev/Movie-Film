import React from "react";
import { Helmet } from "react-helmet-async";
import TiviListPage from "../components/MovieListPage";


const TVPopular = () => {
  return (
    <>
    <Helmet>
      <title> Movie: TV Popular Page</title>
    </Helmet>

    <TiviListPage title="Popular" url="popular" />
  </>
  )
}

export default TVPopular