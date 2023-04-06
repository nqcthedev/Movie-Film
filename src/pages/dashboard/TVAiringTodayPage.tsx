import useLocales from "@/locales/useLocales";
import React from "react";
import { Helmet } from "react-helmet-async";
import TiviListPage from "../components/TiviListPage";


const TVAiringTodayPage = () => {
  const { translate } = useLocales();
  
  return (
    <>
    <Helmet>
      <title> Movie: TV Airing To Day | 4K Movie</title>
    </Helmet>

    <TiviListPage title={`${translate('airingToday')}`} url="airing_today" type="tv"/>
  </>
  )
}

export default TVAiringTodayPage