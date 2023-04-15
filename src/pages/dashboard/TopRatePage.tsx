import useLocales from "@/locales/useLocales";
import React from "react";
import { Helmet } from "react-helmet-async";
import MovieListPage from "../../sections/list-movie/MovieListPage";

const TopRatePage = () => {
  const { translate } = useLocales();
  
  return (
    <>
      <Helmet>
        <title> Movie: Top Rate Page</title>
      </Helmet>

      <MovieListPage title={`${translate('toprate')}`} url="top_rated" />
    </>
  );
};

export default TopRatePage;
