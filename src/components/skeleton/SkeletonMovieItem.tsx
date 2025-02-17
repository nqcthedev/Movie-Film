import React from "react";
// @mui
import { Card, Skeleton, Stack, CardProps } from "@mui/material";

// ----------------------------------------------------------------------

const SkeletonMovieItem = ({ ...other }: CardProps) => {
  return (
    <Card {...other}>
      <Skeleton variant="rectangular" sx={{ paddingTop: "100%" }} />
      <Stack spacing={2} sx={{ p: 3 }}>
        <Skeleton variant="text" sx={{ width: 0.5 }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Skeleton variant="text" sx={{ width: 0.3 }} />
          <Skeleton variant="text" sx={{ width: 0.3 }} />
        </Stack>
      </Stack>
    </Card>
  );
};

export default SkeletonMovieItem;
