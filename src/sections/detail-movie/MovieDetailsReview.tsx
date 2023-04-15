import Iconify from "@/components/iconify/Iconify";
import { RootObjectDetail } from "@/interface/DetailMovie";
import { ResultReviews } from "@/interface/ReviewMovie";
import useLocales from "@/locales/useLocales";
import { fShortenNumber } from "@/utils/formatNumber";
import {
  Box,
  Button,
  LinearProgress,
  Rating,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { sumBy } from "lodash";
import React, { useState } from "react";
import ProductDetailsNewReviewForm from "./MovieDetailsNewReviewForm";
import MovieDetailsReviewList from "./MovieDetailsReviewList";

type Props = {
  movie: ResultReviews;
  detailMovie: RootObjectDetail;
  id: any;
};

const ratings = [
  { name: "1 Star", starCount: 3684, reviewCount: 5542 },

  { name: "2 Star", starCount: 7027, reviewCount: 5369 },

  { name: "3 Star", starCount: 5473, reviewCount: 951 },

  { name: "4 Star", starCount: 8002, reviewCount: 6187 },

  { name: "5 Star", starCount: 4493, reviewCount: 1731 },
];

const total = sumBy(ratings, (star) => star.starCount);

const MovieDetailsReview = ({ movie, detailMovie, id }: Props) => {
  const { translate } = useLocales();

  const [openReview, setOpenReview] = useState<boolean>(false);

  const handleOpenReview = () => {
    setOpenReview(true);
  };

  const handleCloseReview = () => {
    setOpenReview(false);
  };

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={1}
          sx={{
            pt: { xs: 5, md: 0 },
            pb: { xs: 3, md: 0 },
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
            Average rating
          </Typography>

          <Typography variant="h2">
            {detailMovie?.vote_average / 2}/10
          </Typography>
          <Rating
            value={detailMovie?.vote_average / 2}
            precision={0.1}
            readOnly
          />

          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            ({fShortenNumber(detailMovie?.popularity)}
            reviews)
          </Typography>
        </Stack>

        <Stack
          spacing={1.5}
          sx={{
            p: 3,
            py: { md: 5 },
            borderLeft: (theme) => ({
              md: `dashed 1px ${theme.palette.divider}`,
            }),
            borderRight: (theme) => ({
              md: `dashed 1px ${theme.palette.divider}`,
            }),
          }}
        >
          {ratings
            .slice(0)
            .reverse()
            .map((rating) => (
              <ProgressItem key={rating.name} star={rating} total={total} />
            ))}
        </Stack>

        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            pt: { xs: 3, md: 0 },
            pb: { xs: 5, md: 0 },
          }}
        >
          <Button
            color="inherit"
            size="large"
            onClick={handleOpenReview}
            variant="outlined"
            startIcon={<Iconify icon="eva:edit-fill" />}
          >
            {`${translate("readReview")}`}:
          </Button>
        </Stack>
      </Box>

      <Divider />

      <MovieDetailsReviewList reviews={movie?.results} />

      <ProductDetailsNewReviewForm
        open={openReview}
        onClose={handleCloseReview}
        id={id}
      />
    </>
  );
};

export default MovieDetailsReview;

// ----------------------------------------------------------------------

type ProgressItemProps = {
  star: {
    name: string;
    starCount: number;
    reviewCount: number;
  };
  total: number;
};

function ProgressItem({ star, total }: ProgressItemProps) {
  const { name, starCount, reviewCount } = star;

  return (
    <Stack direction="row" alignItems="center">
      <Typography variant="subtitle2" sx={{ width: 42 }}>
        {name}
      </Typography>

      <LinearProgress
        color="inherit"
        variant="determinate"
        value={(starCount / total) * 100}
        sx={{
          mx: 2,
          flexGrow: 1,
        }}
      />

      <Typography
        variant="body2"
        sx={{
          minWidth: 48,
          color: "text.secondary",
        }}
      >
        {fShortenNumber(reviewCount)}
      </Typography>
    </Stack>
  );
}
