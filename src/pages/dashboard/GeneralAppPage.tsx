import React from "react";

import { Helmet } from "react-helmet-async";
// @mui
import { Container, Grid } from "@mui/material";
// auth
import { useSettingsContext } from "@/components/settings";
// sections
import {
  HomeNewMovie,
  HomeWelcome,
  HomeMovieTrending,
  HomeMovies,
  HomeMovieTvToday
} from "@/sections/@dashboard/general/app";
import { useGetBannerQuery } from "@/redux/apiStore";
import LoadingScreen from "@/components/loading-screen";
import useLocales from "@/locales/useLocales";
import Favourite from "@/sections/@dashboard/movies/Favourite";
import { useSelector } from "@/redux/store";

const GeneralAppPage = () => {
  const { translate } = useLocales();

  const {favourite} = useSelector((state) => state.persisted);

  const { themeStretch } = useSettingsContext();

  const { data, isLoading, isFetching, isSuccess, isError } =
    useGetBannerQuery();

  if (isLoading) return <LoadingScreen />;

  if (isFetching) return <LoadingScreen />;

  return (
    <>
      <Helmet>
        <title> General: Home | 4K Movie</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : "lg"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <HomeWelcome
              data={data}
              type="movie"
            />
          </Grid>

          <Grid item xs={12} md={4}  sx={{ mb: 5 }}>
            <HomeNewMovie list={data} />
          </Grid>
        </Grid>

        {/* Movie */}
        <HomeMovieTrending title={`${translate('movieTrending')}`} path="trending"/>

        <HomeMovies title={`${translate('moviePopular')}`} url="popular" path="popular"/>

        <HomeMovies title={`${translate('movieTopRate')}`} url="top_rated" path="topRate"/>

        <HomeMovies title={`${translate('movieUpComing')}`} url="upcoming" path="upcoming"/>


        {/* Component TV */}
        <HomeMovieTvToday title={`${translate('airingToday')}`} url="airing_today" path="airingToday"/>

        <HomeMovieTvToday title={`${translate('ontheair')}`} url="on_the_air" path="onTheAir"/>

        <HomeMovieTvToday title={`${translate('tvpopular')}`} url="popular" path="tvPopular"/>

        <HomeMovieTvToday title={`${translate('tvtoprate')}`} url="top_rated" path="tvTopRate"/>
      
        <Favourite totalItems={favourite.length} />

      </Container>


    </>
  );
};

export default GeneralAppPage;
