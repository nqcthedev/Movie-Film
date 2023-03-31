import React from "react";
import { Helmet } from "react-helmet-async";
import TiviListPage from "../components/MovieListPage";


const TVTopRate = () => {
  return (
    <>
    <Helmet>
      <title> Movie: TV Top Rate Page</title>
    </Helmet>

    <TiviListPage title="Top Rated" url="top_rated" />
  </>
  )
}

export default TVTopRate