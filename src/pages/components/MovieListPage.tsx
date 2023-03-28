import FormProvider from "@/components/hook-form/FormProvider";
import { useSettingsContext } from "@/components/settings";
import React, { useState } from "react";
import { Container, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { IMovieFilter } from "@/@types/movie";
import { PATH_DASHBOARD } from "@/routes/path";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import MovieListSearch from "@/components/movie-list-search";
import ShopFilterDrawer from "@/components/movie-filter/ShopFilterDrawer";
import MovieListSort from "@/components/movie-sort/MovieListSort";

// -------------------------------------------------------------------------------------------------------

type Props = {
  title: string;
  url: string;
};

const MovieListPage = ({ title, url }: Props) => {
  const { themeStretch } = useSettingsContext();

  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const defaultValues = {
    category: "All",
    rating: "",
    sortBy: "featured",
  };

  const methods = useForm<IMovieFilter>({
    defaultValues,
  });

  const {
    reset,
    watch,
    formState: { dirtyFields },
  } = methods;

  const isDefault =
    (!dirtyFields.category && !dirtyFields.rating && !dirtyFields.sortBy) ||
    false;

  const value = watch();


  const handleResetFilter = () => {
    reset();
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };



  return (
    <FormProvider methods={methods}>
      <Container maxWidth={themeStretch ? false : "lg"}>
        <CustomBreadcrumbs
          heading="Movie"
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            {
              name: `${title}`,
            },
            { name: "Movie" },
          ]}
        />

        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ sm: "center" }}
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <MovieListSearch />

          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ShopFilterDrawer
              isDefault={isDefault}
              open={openFilter}
              onOpen={handleOpenFilter}
              onClose={handleCloseFilter}
              onResetFilter={handleResetFilter}
            />

            <MovieListSort />
          </Stack>
        </Stack>
      </Container>
    </FormProvider>
  );
};

export default MovieListPage;
