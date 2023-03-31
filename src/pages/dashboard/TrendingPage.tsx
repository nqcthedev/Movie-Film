import useLocales from "@/locales/useLocales";
import React from "react";
import { Helmet } from "react-helmet-async";
import MovieListPageTrending from "../components/MovieListPageTrending";

const TrendingPage = () => {
  const { translate } = useLocales();
  
  return (
    <>
      <Helmet>
        <title> Movie: Trending Page</title>
      </Helmet>

      <MovieListPageTrending title={`${translate('trending')}`}  />
      
    </>
  );
};

export default TrendingPage;
