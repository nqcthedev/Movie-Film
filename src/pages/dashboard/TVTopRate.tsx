import useLocales from "@/locales/useLocales";
import React from "react";
import { Helmet } from "react-helmet-async";
import TiviListPage from "../components/TiviListPage";


const TVTopRate = () => {
  const { translate } = useLocales();

  return (
    <>
    <Helmet>
      <title> Movie: TV Top Rate | 4K Movie</title>
    </Helmet>

    <TiviListPage title={`${translate('tvtoprate')}`} url="top_rated" type="tv"/>
  </>
  )
}

export default TVTopRate