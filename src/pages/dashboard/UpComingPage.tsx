import React from "react";
import { Helmet } from "react-helmet-async";
import MovieListPage from "../components/MovieListPage";

const UpComingPage = () => {
  return (
    <>
      <Helmet>
        <title> Movie: Up Coming | 4K Movie</title>
      </Helmet>

      <MovieListPage title="Up Coming" url="upcoming" />
    </>
  );
};

export default UpComingPage;
