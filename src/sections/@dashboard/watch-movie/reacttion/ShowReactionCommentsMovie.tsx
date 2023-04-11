import reactionImage from "@/_mock/arrays/reacttionImage";
import Image from "@/components/image/Image";
import { Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

type Props = {
  reactions: any;
};

const ShowReactionCommentsMovie = ({ reactions }: Props) => {
  const [totalNameReaction, setTotalNameReaction] = useState<any[]>([]);

  useEffect(() => {
    const arrTmp: string | any[] = [];

    reactions.map((reaction: any) => {
      if (!arrTmp.includes(reaction.nameReaction)) {
        arrTmp.push(reaction.nameReaction);
      }
      return null;
    });
    setTotalNameReaction(arrTmp);
  }, []);

  return (
    <Paper sx={{ position: "relative", top: "50px", left: "-8px", p: 0.5 }}>
      <Stack direction="row" alignItems={"center"} spacing={1}>
        {totalNameReaction.map((reaction) => (
          <Image
            key={reaction.userId}
            src={reactionImage[reaction as keyof typeof reactionImage]}
            alt={reaction}
            maxWidth="18px"
          />
        ))}
        <Typography variant="caption" sx={{ color: "text.primary" }}>
          {reactions?.length}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default ShowReactionCommentsMovie;
