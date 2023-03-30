import React from "react";

import { Helmet } from "react-helmet-async";
// @mui
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Stack, Button } from "@mui/material";
// auth
import { useAuthContext } from "../../auth/useAuthContext";
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

const GeneralAppPage = () => {
  const { user } = useAuthContext();

  const theme = useTheme();

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
              action={
                <Stack direction="row" spacing={3}>
                  <Button variant="contained">Watch Now</Button>
                  <Button variant="contained">View Info</Button>
                </Stack>
              }
            />
          </Grid>

          <Grid item xs={12} md={4}  sx={{ mb: 5 }}>
            <HomeNewMovie list={data} />
          </Grid>
        </Grid>

        {/* Movie */}
        <HomeMovieTrending title="Movie Trending"/>

        <HomeMovies title="Movie Popular" url="popular"/>

        <HomeMovies title="Movie Top Rate" url="top_rated"/>

        <HomeMovies title="Movie Up Coming" url="upcoming"/>


        {/* Component TV */}
        <HomeMovieTvToday title="TV Airing Today" url="airing_today"/>

        <HomeMovieTvToday title="TV On The Air" url="on_the_air"/>

        <HomeMovieTvToday title="TV Popular" url="popular"/>

        <HomeMovieTvToday title="TV Top Rated" url="top_rated"/>

      </Container>
    </>
  );
};

export default GeneralAppPage;
