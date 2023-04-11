import { Divider, Pagination, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import MoviePostCommentList from "./MoviePostCommentList";
import useFireStore from "@/hooks/useFireStore";
import MoviePostCommentForm from "./MoviePostCommentForm";
import { IMoviePostComment } from "@/@types/movie";
import useLocales from "@/locales/useLocales";
import SkeletonCommentsMovie from "@/components/skeleton/SkeletonCommentsMovie";

type Props = {
  movieId?: any;
};

const Comment = ({ movieId }: Props) => {
  const { translate } = useLocales();

  const conditional = useMemo(
    () => ({
      fieldName: "movieId",
      operator: "==",
      compareValue: movieId,
    }),
    [movieId]
  );

  const { document, loading } = useFireStore("comments", conditional);

  console.log("document", document);

  return (
    <>
      <Stack spacing={3} sx={{ py: 5, px: { md: 5 } }}>
        <Divider />

        {/* <MoviePostTags post={[]}/> */}
        <Divider />
      </Stack>

      <Stack sx={{ px: { md: 5 } }}>
        <Stack direction="row" sx={{ mb: 3 }}>
          <Typography variant="h4"> {`${translate("comments")}`}</Typography>

          <Typography variant="subtitle2" sx={{ color: "text.disabled" }}>
            ({document.length})
          </Typography>
        </Stack>

        <MoviePostCommentForm movieId={movieId} />

        <Divider sx={{ mt: 5, mb: 2 }} />
      </Stack>

      <Stack
        sx={{
          px: { md: 5 },
        }}
      >
        {document.reverse().map((comment: IMoviePostComment) => {
          if (comment.replyComment === null) {
            return (
              <MoviePostCommentList
                key={comment.id}
                idMovie={movieId}
                comment={comment}
                comments={document}
              />
            );
          }
        })}
      {loading && (<SkeletonCommentsMovie/>)}
        <Pagination
          count={8}
          sx={{
            my: 5,
            ml: "auto",
            mr: { xs: "auto", md: 0 },
          }}
        />
      </Stack>
    </>
  );
};

export default Comment;
