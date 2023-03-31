import Label from "@/components/label/Label";
import { RootObjectDetail } from "@/interface/DetailMovie";
import { sentenceCase } from "change-case";
import { Stack, useTheme } from "@mui/material";
import React from "react";

type Props = {
  movie: RootObjectDetail;
};

const MovieDetailSummary = ({ movie, ...other }: Props) => {
  const theme = useTheme();
  return (
    <Stack
      spacing={3}
      sx={{ p: (theme) => ({ md: theme.spacing(5, 5, 9, 2) }) }}
    >
      <Stack spacing={2}>
        <Label
          variant="soft"
          color={movie?.status === "Released" ? "success" : "error"}
          sx={{ textTransform: "uppercase", mr: "auto" }}
        >
          {sentenceCase(movie?.status || "")}
        </Label>
      </Stack>
    </Stack>
  );
};

export default MovieDetailSummary;
