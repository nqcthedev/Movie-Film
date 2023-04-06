import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { useSettingsContext } from "@/components/settings";
import useLocales from "@/locales/useLocales";
import { Box, Card, Container, Divider, Grid, Tabs, Tab } from "@mui/material";
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { PATH_DASHBOARD } from "@/routes/path";
import { useGetMovieDetailQuery, useGetReviewQuery } from "@/redux/apiStore";
import Image from "@/components/image/Image";
import { TMDB_IMAGE } from "@/utils/urlImage";
import MovieDetailSummary from "../components/MovieDetailSummary";
import MovieDetailsCarousel from "../components/MovieDetailsCarousel";
import Markdown from "@/components/markdown/Markdown";
import MovieDetailsReview from "../components/MovieDetailsReview";
import MovieDetailsTopCast from "../components/MovieDetailsTopCast";
import Favourite from "@/sections/@dashboard/movies/Favourite";
import { useSelector } from "@/redux/store";
import SkeletonMovieDetails from "@/components/skeleton/SkeletonMovieDetail";

const MoviesDetailPage = () => {
  const { themeStretch } = useSettingsContext();

  const { favourite } = useSelector((state) => state.persisted);

  const { translate } = useLocales();

  const { id } = useParams();

  const [currentTab, setCurrentTab] = useState<string>("description");

  const [page, setPage] = useState<number>(1);

  const {
    data: detailMovie,
    isLoading,

  } = useGetMovieDetailQuery({ id });

  const { data: reviewMovie, isFetching: reviewFetching } = useGetReviewQuery({
    id,
    page,
  });

  const TABS = useMemo(() => {
    return [
      {
        value: "description",
        label: `${translate("description")}`,
        component: detailMovie ? (
          <Markdown children={detailMovie?.overview} />
        ) : null,
      },
      {
        value: "reviews",
        label: `${translate("reviews")} (${
          reviewMovie ? reviewMovie.results.length : ""
        })`,
        component: reviewMovie ? (
          <MovieDetailsReview
            movie={reviewMovie}
            detailMovie={detailMovie}
            id={id}
          />
        ) : null,
      },
    ];
  }, [detailMovie, reviewMovie, translate]);

  return (
    <>
      <Helmet>
        <title>{`Detail: ${
          detailMovie?.title || detailMovie?.name
        } | 4K Movie`}</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : "lg"}>
        <CustomBreadcrumbs
          heading={`${translate("movieDetail")}`}
          links={[
            { name: `${translate("home")}`, href: PATH_DASHBOARD.root },
            {
              name: `${translate("movie")}`,
            },
            { name: detailMovie?.title },
          ]}
        />

        {detailMovie && (
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={7}>
                <Image
                  alt={detailMovie?.title || detailMovie?.name}
                  src={`${TMDB_IMAGE}${detailMovie?.backdrop_path}`}
                  ratio="1/1"
                  sx={{ borderRadius: 1.5, cursor: "zoom-in" }}
                />
                {/* <MovieDetailsCarousel id={detailMovie?.belongs_to_collection.id}/> */}
              </Grid>
              <Grid item xs={12} md={6} lg={5}>
                <MovieDetailSummary movie={detailMovie} />
              </Grid>
            </Grid>

            <Card sx={{ my: 10 }}>
              <Tabs
                value={currentTab}
                onChange={(event, newValue) => setCurrentTab(newValue)}
                sx={{ px: 3, bgcolor: "background.neutral" }}
              >
                {TABS.map((tab) => (
                  <Tab key={tab.value} value={tab.value} label={tab.label} />
                ))}
              </Tabs>

              <Divider />

              {TABS.map(
                (tab) =>
                  tab.value === currentTab && (
                    <Box
                      key={tab.value}
                      sx={{
                        ...(currentTab === "description" && {
                          p: 3,
                        }),
                      }}
                    >
                      {tab.component}
                    </Box>
                  )
              )}
            </Card>

            <MovieDetailsTopCast  detailMovie={detailMovie} />
          </>
        )}

        {isLoading  && <SkeletonMovieDetails />}
        <Favourite totalItems={favourite.length} />
      </Container>
    </>
  );
};

export default MoviesDetailPage;
