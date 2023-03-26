import React from "react";
import { Helmet } from "react-helmet-async";
import MovieListPage from "../components/MovieListPage";

const TrendingPage = () => {
  return (
    <>
      <Helmet>
        <title> Movie: Trending Page</title>
      </Helmet>

      <MovieListPage title="Trending" url="trending" />
      
    </>
  );
};

export default TrendingPage;
