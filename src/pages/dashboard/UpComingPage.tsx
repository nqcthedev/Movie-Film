import React from "react";
import { Helmet } from "react-helmet-async";
import MovieListPage from "../components/MovieListPage";

const UpComingPage = () => {
  return (
    <>
      <Helmet>
        <title> Movie: Up Coming Page</title>
      </Helmet>

      <MovieListPage title="Up Coming" url="upcoming" />
    </>
  );
};

export default UpComingPage;
