import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { useSettingsContext } from "@/components/settings";
import useLocales from "@/locales/useLocales";
import { Box, Card, Container, Divider, Grid, Tabs, Tab } from "@mui/material";
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { PATH_DASHBOARD } from "@/routes/path";
import {
  useGetMovieOrTvDetailQuery,
  useGetReviewQuery,
} from "@/services/apiStore";
import Image from "@/components/image/Image";
import { TMDB_IMAGE, TMDB_IMAGE_W500 } from "@/utils/urlImage";
import MovieDetailSummary from "../../sections/detail-movie/MovieDetailSummary";
import MovieDetailsCarousel from "../../sections/detail-movie/MovieDetailsCarousel";
import Markdown from "@/components/markdown/Markdown";
import MovieDetailsReview from "../../sections/detail-movie/MovieDetailsReview";
import MovieDetailsTopCast from "../../sections/detail-movie/MovieDetailsTopCast";
import Favourite from "@/sections/@dashboard/movies/Favourite";
import { useSelector } from "@/redux/store";
import SkeletonMovieDetails from "@/components/skeleton/SkeletonMovieDetail";
import { useAuthContext } from "@/auth/useAuthContext";

const MoviesDetailPage = () => {
  const { themeStretch } = useSettingsContext();

  const { favourite } = useSelector((state: { persisted: any; }) => state.persisted);

  const { translate } = useLocales();

  const { user } = useAuthContext();

  const { id, type } = useParams();

  const [currentTab, setCurrentTab] = useState<string>("description");

  const [page, setPage] = useState<number>(1);

  const { data: detailMovie, isLoading } = useGetMovieOrTvDetailQuery({
    id,
    type,
  });

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
            { name: `${translate("detail")}` },
            {
              name: `${translate("movie")}`,
            },
            { name: detailMovie?.title || detailMovie?.name },
          ]}
        />

        {detailMovie && (
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={7}>
                <Image
                  alt={detailMovie?.title || detailMovie?.name}
                  src={
                    `${TMDB_IMAGE}${detailMovie?.backdrop_path}` ||
                    `${TMDB_IMAGE_W500}${detailMovie?.poster_path}`
                  }
                  ratio="1/1"
                  sx={{ borderRadius: 1.5, cursor: "zoom-in" }}
                />
                {/* <MovieDetailsCarousel id={detailMovie?.belongs_to_collection.id}/> */}
              </Grid>
              <Grid item xs={12} md={6} lg={5}>
                <MovieDetailSummary movie={detailMovie} type={type} />
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

            <MovieDetailsTopCast detailMovie={detailMovie} type={type}/>
          </>
        )}

        {isLoading && <SkeletonMovieDetails />}
       {user ? ( <Favourite totalItems={favourite.length} />) : null}
      </Container>
    </>
  );
};

export default MoviesDetailPage;
