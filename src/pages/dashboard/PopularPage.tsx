import React from "react";
import { Helmet } from "react-helmet-async";
import MovieListPage from "../components/MovieListPage";

const PopularPage = () => {
  return (
    <>
      <Helmet>
        <title> Movie: Popular Page</title>
      </Helmet>

      <MovieListPage title="Popular" url="popular" />
    </>
  );
};

export default PopularPage;
