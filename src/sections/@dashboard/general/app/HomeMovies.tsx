import React from "react";
import { Key } from "react";
// @mui
import { Box, BoxProps, Button,  Typography } from "@mui/material";
// components
import { SkeletonMovieItem } from "@/components/skeleton";
import { MoviesListCard } from "@/sections/@dashboard/movies/trending";
import { useGetMoviesQuery } from "@/redux/apiStore";
// interface
import { Result } from "@/interface/Trending";

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  title: string;
  url: string;
}

const HomeMovies = ({ title, url }: Props) => {
  const page: number = 1;

  const { data, isLoading, isFetching } = useGetMoviesQuery({ page, url });

  return (
    <>
      <Box display="flex" justifyContent={"space-between"} alignItems="end">
        <Typography variant="h4" sx={{ mb: 1, mt: 5 }}>
          {title}
        </Typography>
        <Button sx={{mb:1}} size="small" variant="outlined" color="primary">
          View More
        </Button>
      </Box>

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
        {(isLoading || isFetching ? [...Array(4)] : data.slice(0, 4)).map(
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

export default HomeMovies;
