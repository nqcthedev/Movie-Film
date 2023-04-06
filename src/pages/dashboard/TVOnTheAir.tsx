import useLocales from "@/locales/useLocales";
import React from "react";
import { Helmet } from "react-helmet-async";
import TiviListPage from "../components/TiviListPage";


const TVOnTheAir = () => {
  const { translate } = useLocales();
  
  return (
    <>
    <Helmet>
      <title> Movie: TV On the Air | 4K Movie</title>
    </Helmet>

    <TiviListPage title={`${translate('ontheair')}`} url="on_the_air" />
  </>
  )
}

export default TVOnTheAir