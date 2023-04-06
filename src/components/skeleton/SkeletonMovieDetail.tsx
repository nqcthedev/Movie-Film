// @mui
import { Grid, Skeleton, GridProps, Card, Stack, Box } from "@mui/material";
import SkeletonTopCast from "./SkeletonTopCast";

// ----------------------------------------------------------------------

export default function SkeletonMovieDetails({ ...other }: GridProps) {
  return (
    <>
      <Grid container spacing={3} {...other}>
        <Grid item xs={12} md={6} lg={7}>
          <Skeleton
            variant="rectangular"
            width="100%"
            sx={{ paddingTop: "100%", borderRadius: 2 }}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={5}>
          <Skeleton variant="circular" width={80} height={80} />
          <Skeleton variant="text" height={240} />
          <Skeleton variant="text" height={80} />
          <Skeleton variant="text" height={80} />
          <Stack spacing={2} direction="row" justifyContent="space-between">
            <Skeleton variant="text" width={240} height={80} />
            <Skeleton variant="text" width={240} height={80} />
          </Stack>
        </Grid>
      </Grid>
      <Card sx={{ my: 10 }}>
        <Skeleton variant="rounded" height={120} />
      </Card>

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
        <SkeletonTopCast />
        <SkeletonTopCast />
        <SkeletonTopCast />
        <SkeletonTopCast />
        <SkeletonTopCast />
        <SkeletonTopCast />
        <SkeletonTopCast />
        <SkeletonTopCast />
      </Box>
    </>
  );
}
