import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { useSettingsContext } from "@/components/settings";
import { Result } from "@/interface/Movies";
import useLocales from "@/locales/useLocales";
import { useDispatch, useSelector } from "@/redux/store";
import { PATH_DASHBOARD } from "@/routes/path";
import { MoviesListCard } from "@/sections/@dashboard/movies/trending";
import { Box, Container } from "@mui/material";
import React, { Key } from "react";
import { Helmet } from "react-helmet-async";

const FavouritePage = () => {
  const { favourite } = useSelector((state) => state.persisted);

  const { themeStretch } = useSettingsContext();

  const { translate } = useLocales();

  return (
    <>
      <Helmet>
        <title> General: Favourite | 4K Movie</title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : "lg"}>
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
                <MoviesListCard key={movie.id} movie={movie} type='' />
              )
          )}
        </Box>
      </Container>
    </>
  );
};

export default FavouritePage;
