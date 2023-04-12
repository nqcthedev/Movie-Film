import FormProvider from "@/components/hook-form/FormProvider";
import { useSettingsContext } from "@/components/settings";
import React, { Key, useState } from "react";
import { Box, Container, Pagination, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { IMovieFilter } from "@/@types/movie";
import { PATH_DASHBOARD } from "@/routes/path";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import MovieListSearch from "@/components/movie-list-search";
import ShopFilterDrawer from "@/components/movie-filter/ShopFilterDrawer";
import MovieListSort from "@/components/movie-sort/MovieListSort";
import { useGetTvQuery } from "@/redux/apiStore";
import { Result } from "@/interface/Movies";
import { MoviesListCard } from "@/sections/@dashboard/movies/trending";
import { SkeletonMovieItem, SkeletonMovieList } from "@/components/skeleton";
import Block from "@/components/settings/drawer/Block";
import useLocales from "@/locales/useLocales";

// -------------------------------------------------------------------------------------------------------

type Props = {
  title: string;
  url: string;
  type: string;
};

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  "& > *": { my: 1 },
} as const;

const TiviListPage = ({ title, url, type }: Props) => {
  const { translate } = useLocales();

  const { themeStretch } = useSettingsContext();

  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isFetching } = useGetTvQuery({ page, url });

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

  const values = watch();

  const dataFiltered = applyFilter(data, values);

  const handleResetFilter = () => {
    reset();
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handlePageChange = (
    event: any,
    value: React.SetStateAction<number>
  ) => {
    setPage(value);
  };

  return (
    <FormProvider methods={methods}>
      <Container maxWidth={themeStretch ? false : "lg"}>
        <CustomBreadcrumbs
          heading={title}
          links={[
            { name: `${translate("home")}`, href: PATH_DASHBOARD.root },
            {
              name: title,
            },
            { name: `${translate("movie")}` },
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
          {isLoading || isFetching ? (
            <SkeletonMovieList />
          ) : (
            data?.results.map(
              (movie: Result, index: Key | null | undefined) =>
                movie && (
                  <MoviesListCard key={movie.id} movie={movie} type={type} />
                )
            )
          )}
        </Box>

        <Box sx={{ margin: "0 auto" }}>
          <Block title="" sx={style}>
            <Pagination
              onChange={handlePageChange}
              page={page}
              count={data?.total_pages}
              shape="circular"
            />
          </Block>
        </Box>
      </Container>
    </FormProvider>
  );
};

export default TiviListPage;

// ----------------------------------------------------------------------

function applyFilter(movies: Result[], filters: IMovieFilter) {}
