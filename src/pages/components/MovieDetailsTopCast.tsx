import { RootObjectDetail } from "@/interface/DetailMovie";
import useLocales from "@/locales/useLocales";
import TopCastCard from "@/sections/@dashboard/movies/detail/TopCastCard";
import { Box, Stack, Typography } from "@mui/material";
import React, { Key } from "react";

// ---------------------------------------------------------------------------

type Props = {
  detailMovie: RootObjectDetail;
  type: any;
};

const MovieDetailsTopCast = ({ detailMovie, type }: Props) => {
  const { translate } = useLocales();

  return (
    <Stack spacing={1.5}>
      <Typography variant="h4" gutterBottom>
        {`${translate("topCast")}`}
      </Typography>
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
          <TopCastCard key={cast.id} cast={cast} type={type} />
        ))}
      </Box>
    </Stack>
  );
};

export default MovieDetailsTopCast;
