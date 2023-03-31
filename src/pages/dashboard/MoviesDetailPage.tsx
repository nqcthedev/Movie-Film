import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { useSettingsContext } from "@/components/settings";
import useLocales from "@/locales/useLocales";
import { Container, Grid } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { PATH_DASHBOARD } from "@/routes/path";
import { useGetMovieDetailQuery } from "@/redux/apiStore";
import Image from "@/components/image/Image";
import { TMDB_IMAGE } from "@/utils/urlImage";
import MovieDetailSummary from "../components/MovieDetailSummary";

const MoviesDetailPage = () => {
  const { themeStretch } = useSettingsContext();

  const { translate } = useLocales();

  const { id } = useParams();

  const { data, isFetching } = useGetMovieDetailQuery({ id });

  console.log(data);

  return (
    <>
      <Helmet>
        <title> Detail: Movie | 4K Movie</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : "lg"}>
        <CustomBreadcrumbs
          heading={`${translate("movieDetail")}`}
          links={[
            { name: `${translate("home")}`, href: PATH_DASHBOARD.root },
            {
              name: `${translate("movie")}`,
            },
            { name: data?.title },
          ]}
        />

        {data && (
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={7}>
                <Image
                  alt={data?.title || data?.name}
                  src={`${TMDB_IMAGE}${data?.backdrop_path}`}
                  ratio="1/1"
                  sx={{ borderRadius: 1.5, cursor: 'zoom-in' }}
                />
              </Grid>
              <Grid item  xs={12} md={6} lg={5}>
                <MovieDetailSummary movie={data}/>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};

export default MoviesDetailPage;
