import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Key } from "react";
// @mui
import { Box, BoxProps, Button, Typography, Link } from "@mui/material";
// components
import { SkeletonMovieItem } from '@/components/skeleton';
import { MoviesListCard } from "@/sections/@dashboard/movies/CardMovies";
import {  useGetTvQuery } from '@/services/apiStore';
// interface
import { Result } from "@/interface/Trending";
import useLocales from '@/locales/useLocales';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  title: string;
  url: string;
  path:string;
}

const HomeMovieTvToday = ({title, url, path}: Props) => {
  const { translate } = useLocales();
  
  const page: number = 1

  const {data, isLoading, isFetching } = useGetTvQuery({page, url})

  return (
    <>
     <Box display="flex" justifyContent={"space-between"} alignItems="end">
        <Typography variant="h4" sx={{ mb: 1, mt: 5 }}>
          {title}
        </Typography>
        <Link
          component={RouterLink}
          to={path}
          underline="none"
          color="inherit"
        >
          <Button
            sx={{ mb: 1 }}
            size="small"
            variant="outlined"
            color="primary"
          >
            {`${translate("viewMore")}`}
          </Button>
        </Link>
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
      {(isLoading || isFetching ? [...Array(4)] : data?.results.slice(0,4)).map(
        (movie: Result, index: Key | null | undefined) =>
          movie ? (
            <MoviesListCard key={movie.id} movie={movie} type="tv"/>
          ) : (
            <SkeletonMovieItem key={index} />
          )
      )}
    </Box>
  </>
  )
}

export default HomeMovieTvToday