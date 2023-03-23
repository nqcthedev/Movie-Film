// @mui
import { Box } from "@mui/material";

// components
import { useGetTrendingQuery } from "@/redux/apiStore";
import { Key } from "react";
import { MoviesListCard } from "../../movies/trending";
import { Result } from "@/interface/Trending";

// ----------------------------------------------------------------------



const HomeMovieTrending = () => {
  const {data, isLoading, isFetching, isSuccess, isError} = useGetTrendingQuery()

  console.log(data)
  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: "repeat(1,1fr)",
        sm: "repeat(2,1fr)",
        md: "repeat(3,1fr)",
        lg: "repeat(4,1fr)",
      }}
     
    >
      {(isLoading ? [...Array(12)] : data).map((movie: Result, index: Key | null | undefined) =>
        movie ? (
          <MoviesListCard key={movie.id} movie={movie} />
        ) : (
          // <SkeletonMovieItem key={index} />
          ''
        )
      )}
    </Box>
  );
};

export default HomeMovieTrending;
