import React from "react";
import { Helmet } from "react-helmet-async";
import MovieListPage from "../components/MovieListPage";

const TopRatePage = () => {
  return (
    <>
      <Helmet>
        <title> Movie: Top Rate Page</title>
      </Helmet>

      <MovieListPage title="Top Rate" url="top_rated" />
    </>
  );
};

export default TopRatePage;
