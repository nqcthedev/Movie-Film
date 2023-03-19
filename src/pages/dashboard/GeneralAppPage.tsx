import { Typography } from "@mui/material";
import React from "react";

import { Helmet } from "react-helmet-async";
// @mui
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Stack, Button } from "@mui/material";
// auth
import { useAuthContext } from "../../auth/useAuthContext";
import { useSettingsContext } from "@/components/settings";
import { HomeWelcome } from "@/sections/@dashboard/general/app";
import { useGetBannerQuery } from "@/redux/apiStore";

const GeneralAppPage = () => {
  const { user } = useAuthContext();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  const { data, isLoading, isFetching, isSuccess, error } = useGetBannerQuery();

  console.log(data)

  return (
    <>
      <Helmet>
        <title> General: Home | 4K Movie</title>
      </Helmet>

      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <HomeWelcome
              title='Welcome back!'
              description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
              action={
                <Stack direction="row" spacing={3}>
                  <Button variant="contained">Watch Now</Button>
                  <Button variant="contained">View Info</Button>
                </Stack>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default GeneralAppPage;
