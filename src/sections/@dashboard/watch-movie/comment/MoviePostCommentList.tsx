import React, { useMemo } from "react";
// @mui
import { Box, List } from "@mui/material";
// @types
import { IMoviePostComment } from "@/@types/movie";
//
import MoviePostCommentItem from "./MoviePostCommentItem";
import useFireStore from "@/hooks/useFireStore";

// ----------------------------------------------------------------------

type Props = {
  comment: IMoviePostComment;
  idMovie: any;
  comments: IMoviePostComment[];
};
const MoviePostCommentList = ({ comment, idMovie, comments }: Props) => {
  const { id, userName, message, avatarUrl, postedAt, replyComment, reactions } = comment;
  return (
    <List disablePadding>
      <Box key={id}>
        <MoviePostCommentItem
          name={userName}
          message={message}
          avatarUrl={avatarUrl}
          postedAt={postedAt}
          movieId={idMovie}
          listComment={comments}
          replyComment={replyComment}
          commentParentId={id}
          reactions={reactions}
        />

        {comments.reverse().map((comment) => {
          if (comment.replyComment === id) {
            return (
              <MoviePostCommentItem
                key={comment?.id}
                name={comment?.userName}
                message={comment?.message}
                postedAt={comment?.postedAt}
                avatarUrl={comment?.avatarUrl}
                movieId={idMovie}
                listComment={comments}
                replyComment={comment?.replyComment}
                commentParentId={id}
                reactions={comment?.reactions}
                hasReply
              />
            )
          }
          return null;
        })}
      </Box>
    </List>
  );
};

export default MoviePostCommentList;
