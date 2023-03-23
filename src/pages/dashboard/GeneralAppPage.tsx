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

      <Container maxWidth={themeStretch ? false : "xl"}>
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

          <Grid item xs={12} md={4}>
            <HomeNewMovie list={data} />
          </Grid>
        </Grid>

        <HomeMovieTrending />
      </Container>
    </>
  );
};

export default GeneralAppPage;
