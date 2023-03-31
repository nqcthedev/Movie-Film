import React from "react";
import { Helmet } from "react-helmet-async";
import TiviListPage from "../components/TiviListPage";


const TVAiringTodayPage = () => {
  return (
    <>
    <Helmet>
      <title> Movie: TV Airing To Day Page</title>
    </Helmet>

    <TiviListPage title="Airing Today" url="airing_today" />
  </>
  )
}

export default TVAiringTodayPage