// @mui
import { Box, BoxProps, Typography } from "@mui/material";

// components
import { SkeletonMovieItem } from '@/components/skeleton';
import { MoviesListCard } from "@/sections/@dashboard/movies/trending";
// query
import { useGetTrendingQuery } from "@/redux/apiStore";
// interface
import { Result } from "@/interface/Trending";
import { Key } from "react";


// ----------------------------------------------------------------------

interface Props extends BoxProps {
  title: string;
}

const HomeMovieTrending = ({ title }: Props) => {
  const page: number = 1
  const { data, isLoading, isFetching, isSuccess, isError } =
    useGetTrendingQuery({page});

  return (
    <>
      <Typography variant="h4" sx={{ mb: 1 }}>{title}</Typography>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        {(isLoading || isFetching ? [...Array(4)] : data.slice(0,4)).map(
          (movie: Result, index: Key | null | undefined) =>
            movie ? (
              <MoviesListCard key={movie.id} movie={movie} />
            ) : (
              <SkeletonMovieItem key={index} />
            )
        )}
      </Box>
    </>
  );
};

export default HomeMovieTrending;
