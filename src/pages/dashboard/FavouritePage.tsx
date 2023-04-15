import { useAuthContext } from "@/auth/useAuthContext";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { useSettingsContext } from "@/components/settings";
import { Result } from "@/interface/Movies";
import useLocales from "@/locales/useLocales";
import { useSelector } from "@/redux/store";
import { PATH_DASHBOARD } from "@/routes/path";
import { MoviesListCard } from "@/sections/@dashboard/movies/CardMovies";
import { Box, Container } from "@mui/material";
import React, { Key } from "react";
import { Helmet } from "react-helmet-async";
import Page403 from "../Page403";

const FavouritePage = () => {
  const { favourite } = useSelector((state) => state.persisted);

  const { themeStretch } = useSettingsContext();

  const { translate } = useLocales();

  const { user } = useAuthContext();

  return (
    <>
      <Helmet>
        <title> Movie: Favourite | 4K Movie</title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : "lg"}>
        {user ? (
          <>
            <CustomBreadcrumbs
              heading={`${translate("favourite")}`}
              links={[
                { name: `${translate("home")}`, href: PATH_DASHBOARD.root },
                {
                  name: `${translate("favourite")}`,
                },
                { name: `${translate("movie")}` },
              ]}
            />

            <Box
              gap={3}
              mt={5}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
            >
              {favourite?.map(
                (movie: Result, index: Key) =>
                  movie && (
                    <MoviesListCard
                      key={movie.id}
                      movie={movie}
                      type={movie?.type}
                    />
                  )
              )}
            </Box>
          </>
        ) : (
          <Page403 />
        )}
      </Container>
    </>
  );
};

export default FavouritePage;
