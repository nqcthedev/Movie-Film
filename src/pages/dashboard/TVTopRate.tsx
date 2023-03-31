import useLocales from "@/locales/useLocales";
import React from "react";
import { Helmet } from "react-helmet-async";
import TiviListPage from "../components/MovieListPage";


const TVTopRate = () => {
  const { translate } = useLocales();

  return (
    <>
    <Helmet>
      <title> Movie: TV Top Rate Page</title>
    </Helmet>

    <TiviListPage title={`${translate('tvtoprate')}`} url="top_rated" />
  </>
  )
}

export default TVTopRate