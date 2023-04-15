import { ResultReviews } from "@/interface/ReviewMovie";
import { fDate } from "@/utils/formatTime";
import { TMDB_IMAGE } from "@/utils/urlImage";
import { Avatar, Button, Pagination, Rating, Stack, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import useLocales from "@/locales/useLocales";
import { fShortenNumber } from "@/utils/formatNumber";
import Iconify from "@/components/iconify/Iconify";
// ---------------------------------------------------------------------------------------------

type Props = {
  reviews: ResultReviews[];
};

const MovieDetailsReviewList = ({ reviews }: Props) => {


  return (
    <>
      <Stack
        spacing={5}
        sx={{
          pt: 5,
          pl: {
            xs: 2.5,
            md: 0,
          },
          pr: {
            xs: 2.5,
            md: 5,
          },
        }}
      >
        {reviews.slice(0,9).map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </Stack>

      <Stack
        alignItems={{
          xs: "center",
          md: "flex-end",
        }}
        sx={{
          my: 5,
          mr: { md: 5 },
        }}
      >
        <Pagination count={10} />
      </Stack>
    </>
  );
};

export default MovieDetailsReviewList;

// ----------------------------------------------------------------------

type ReviewItemProps = {
  review: ResultReviews;
};

function ReviewItem({ review }: ReviewItemProps) {
  const maxChars = 200;

  const [isHelpful, setIsHelpful] = useState<boolean>(false);

  const helpful = useMemo(() => {
    return Math.floor(Math.random() * 1000)
  }, [])

  return (
    <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
      <Stack
        spacing={2}
        alignItems="center"
        direction={{
          xs: 'row',
          md: 'column',
        }}
        sx={{
          width: { md: 240 },
          textAlign: { md: 'center' },
        }}
      >
        <Avatar
          src={`${TMDB_IMAGE}${review?.author_details.avatar_path}`}
          sx={{
            width: { md: 64 },
            height: { md: 64 },
          }}
        />

        <Stack spacing={{ md: 0.5 }}>
          <Typography variant="subtitle2" noWrap>
            {review?.author_details.name || review?.author_details.username}
          </Typography>

          <Typography variant="caption" sx={{ color: "text.secondary" }} noWrap>
            {fDate(review?.updated_at)}
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={1} flexGrow={1}>
        <Rating
          size="small"
          value={review?.author_details.rating / 1.3}
          precision={0.1}
          readOnly
        />
        <LongContent content={review?.content} maxChars={maxChars} />

        <Stack
          spacing={1}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          direction={{ xs: 'column', sm: 'row' }}
        >
          {!isHelpful && (
            <Typography variant="subtitle2">Was this review helpful to you?</Typography>
          )}

          <Button
            size="small"
            color="inherit"
            startIcon={<Iconify icon={!isHelpful ? 'ic:round-thumb-up' : 'eva:checkmark-fill'} />}
            onClick={() => setIsHelpful(!isHelpful)}
          >
            {isHelpful ? 'Helpful' : 'Thank'}({fShortenNumber(!isHelpful ? helpful : helpful + 1)})
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

// ------------------------------

type LongContentProps = {
  content: string;
  maxChars: number;
};

function LongContent({ content, maxChars }: LongContentProps) {
  const [showFullContent, setShowFullContent] = useState<boolean>(false);

  const { translate } = useLocales();

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  return (
    <Typography variant="body2" onClick={toggleContent}>
      {showFullContent || content.length <= maxChars
        ? content
        : `${content.substring(0, maxChars)}... ${translate("viewMore")}`}
    </Typography>
  );
}
