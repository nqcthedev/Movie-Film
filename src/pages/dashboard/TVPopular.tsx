import useLocales from "@/locales/useLocales";
import React from "react";
import { Helmet } from "react-helmet-async";
import TiviListPage from "../../sections/list-movie/TiviListPage";


const TVPopular = () => {
  const { translate } = useLocales();
  
  return (
    <>
    <Helmet>
      <title> Movie: TV Popular | 4K Movie</title>
    </Helmet>

    <TiviListPage title={`${translate('tvPopular')}`} url="popular"   type="tv"/>
  </>
  )
}

export default TVPopular