import { RootObjectDetail } from "@/interface/DetailMovie";
import TopCastCard from "@/sections/@dashboard/movies/detail/TopCastCard";
import { Box } from "@mui/material";
import React, { Key } from "react";

// ---------------------------------------------------------------------------

type Props = {
  detailMovie: RootObjectDetail;
};

const MovieDetailsTopCast = ({ detailMovie }: Props) => {
  return (
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
      {detailMovie?.credits.cast.slice(0, 8).map((cast: any, index: Key) => (
        <TopCastCard key={cast.id} cast={cast} />
      ))}
    </Box>
  );
};

export default MovieDetailsTopCast;
