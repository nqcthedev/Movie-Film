import rectionGif from "@/_mock/arrays/reactionGift";
import { DB } from "@/auth/FireBaseContext";
import { useAuthContext } from "@/auth/useAuthContext";
import Image from "@/components/image/Image";
import { Paper, Stack } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import React from "react";

type Props = {
  reactions: any[];
  showReaction: boolean;
  setShowReaction: any;
  commentParentId: string;
  hasReply: any;
};

const ReactionCommentsMovie = ({
  reactions,
  showReaction,
  setShowReaction,
  commentParentId,
  hasReply,
}: Props) => {
  const { user } = useAuthContext();

  const handleReactionMovieComment = (nameReaction: string) => {
    const docRef = doc(DB, `comments/${commentParentId}`);

    if (reactions?.some((reaction) => reaction.userId === user?.uid)) {
      const newReaction = reactions.filter(
        (reaction) => reaction.userId !== user?.uid
      );

      console.log(newReaction);

      const userReactionType = reactions.find(
        (item) => item.userId === user?.uid
      ).nameReaction;

      console.log(userReactionType);

      if (nameReaction === userReactionType) {
        updateDoc(docRef, {
          reactions: newReaction,
        });

        return setShowReaction(false);
      }

      updateDoc(docRef, {
        reactions: [
          ...newReaction,
          { userId: user?.uid, nameReaction: nameReaction },
        ],
      });
    } else {
      updateDoc(docRef, {
        reactions: [
          ...reactions,
          { userId: user?.uid, nameReaction: nameReaction },
        ],
      });
    }

  setShowReaction(false);
  };

  return (
    <Paper
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        maxWidth: "300px",
        position: "relative",
        right: "-65px",
        top: "-20px",
        p:0.8,
        ...(hasReply && { ml: 8 }),
      }}
    >
      {/* <p style={{position:"absolute",width: "100%", height:"20px", backgroundColor:"red", top:"-20px", zIndex:100}}></p> */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ cursor: "pointer" }}
        onMouseEnter={() => setShowReaction(true)}
        onMouseLeave={() => setShowReaction(false)}
      >
        {rectionGif.map((gif) => (
          <>
            <Image
            key={gif?.name}
              src={gif?.image}
              alt={gif?.name}
              radioGroup="1/1"
              onClick={() => handleReactionMovieComment(gif?.name)}
              sx={{
                 "&:hover": {
                  transform: ' scale(1.3)',
                 }
              }}
              {...reactions.some((item) => item.userId === user?.uid) &&
                reactions.find((item) => item.userId === user?.uid)
                  .type === gif.name && <span style={{background:"red", width:"16px", height:"16px", borderRadius:"50%"}} />}
            />
          </>
        ))}
      </Stack>
    </Paper>
  );
};

export default ReactionCommentsMovie;
