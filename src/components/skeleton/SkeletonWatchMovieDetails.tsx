import { Box, Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

const SkeletonWatchMovieDetails = () => {
  return (
    <>
      <Skeleton
        width="100%"
        height={560}
        variant="rectangular"
        sx={{ borderRadius: 2 }}
      />
      <Grid
        container
        sx={{ px: { xs: 1.5, md: 3 }, mt: 5 }}
        my={10}
        justifyContent={"space-between"}
      >
        <Grid item xs={12} md={6} lg={7}>
          <Stack direction="column" spacing={3}>
            <Skeleton variant="text" height={60} />
            <Skeleton variant="text" height={60} />
            <Skeleton variant="text" height={60} />
            <Skeleton variant="text" height={60} />
            <Skeleton variant="text" height={150} />
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Skeleton variant="text" height={60} />
          <Skeleton variant="text" height={60} />
          <Skeleton variant="text" height={60} />
        </Grid>
      </Grid>
    </>
  );
};

export default SkeletonWatchMovieDetails;
