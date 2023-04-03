import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { useSettingsContext } from "@/components/settings";
import useLocales from "@/locales/useLocales";
import { Box, Card, Container, Divider, Grid, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { PATH_DASHBOARD } from "@/routes/path";
import { useGetMovieDetailQuery } from "@/redux/apiStore";
import Image from "@/components/image/Image";
import { TMDB_IMAGE } from "@/utils/urlImage";
import MovieDetailSummary from "../components/MovieDetailSummary";
import MovieDetailsCarousel from "../components/MovieDetailsCarousel";
import Markdown from "@/components/markdown/Markdown";

const MoviesDetailPage = () => {
  const { themeStretch } = useSettingsContext();

  const { translate } = useLocales();

  const { id } = useParams();

  const [currentTab, setCurrentTab] = useState<string>('description');

  const { data, isFetching } = useGetMovieDetailQuery({ id });

  console.log(data)

  const TABS = [
    {
      value: 'description',
      label: 'description',
      component: data ? <Markdown children={data?.overview} /> : null,
    },
    // {
    //   value: 'reviews',
    //   label: `Reviews (${movie ? movie.reviews.length : ''})`,
    //   component: movie ? <MovieDetailsReview movie={data} /> : null,
    // },
  ];

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
                {/* <MovieDetailsCarousel id={data?.belongs_to_collection.id}/> */}
              </Grid>
              <Grid item  xs={12} md={6} lg={5}>
                <MovieDetailSummary movie={data}/>
              </Grid>
            </Grid>

            <Card>
              <Tabs
                value={currentTab}
                onChange={(event, newValue) => setCurrentTab(newValue)}
                sx={{ px: 3, bgcolor: 'background.neutral' }}
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
                        ...(currentTab === 'description' && {
                          p: 3,
                        }),
                      }}
                    >
                      {tab.component}
                    </Box>
                  )
              )}
            </Card>
          </>
        )}
      </Container>
    </>
  );
};

export default MoviesDetailPage;
