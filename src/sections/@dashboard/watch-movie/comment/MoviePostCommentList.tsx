import React from "react";
// @mui
import { Box, List } from "@mui/material";
// @types
import { IMoviePostComment } from "@/@types/movie";
//
import MoviePostCommentItem from "./MoviePostCommentItem";

// ----------------------------------------------------------------------

type Props = {
  comments: IMoviePostComment[];
  idMovie: any
};
const MoviePostCommentList = ({ comments,idMovie }: Props) => {
 return (
  <List disablePadding>
  {comments.map((comment) => {
    // const { id, replyComment, userName, message, avatarUrl, postedAt } =
    //   comment

    {console.log("Props",comment)}

    const hasReply = comment?.replyComment !== null && comment?.replyComment === comment?.id
    
    console.log("hasReply",hasReply)

      return (
      
          <Box key={comment?.movieId}>
            <MoviePostCommentItem
              name={comment?.userName}
              message={comment?.message}
              postedAt={comment?.postedAt}
              avatarUrl={comment?.avatarUrl}
              idMovie={idMovie}
              commentParentId={comment?.id}
            />

              {hasReply &&  comment?.replyComment === comment?.id && (
                 <MoviePostCommentItem
                 name={comment?.userName}
                 message={comment?.message}
                 postedAt={comment?.postedAt}
                 avatarUrl={comment?.avatarUrl}
                 idMovie={idMovie}

               />
              )};

              
          </Box>
        
      )
    
  })}
</List>
 )
};

export default MoviePostCommentList;
