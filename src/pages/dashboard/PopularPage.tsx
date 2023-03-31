import useLocales from "@/locales/useLocales";
import React from "react";
import { Helmet } from "react-helmet-async";
import MovieListPage from "../components/MovieListPage";

const PopularPage = () => {
  const { translate } = useLocales();
  
  return (
    <>
      <Helmet>
        <title> Movie: Popular Page</title>
      </Helmet>

      <MovieListPage title={`${translate('popular')}`} url="popular" />
    </>
  );
};

export default PopularPage;
