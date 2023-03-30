import React from "react";
import { Helmet } from "react-helmet-async";
import MovieListPageTrending from "../components/MovieListPageTrending";

const TrendingPage = () => {
  return (
    <>
      <Helmet>
        <title> Movie: Trending Page</title>
      </Helmet>

      <MovieListPageTrending title="Trending"  />
      
    </>
  );
};

export default TrendingPage;
