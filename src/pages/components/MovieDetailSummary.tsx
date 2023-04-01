import Label from "@/components/label/Label";
import { RootObjectDetail } from "@/interface/DetailMovie";
import { sentenceCase } from "change-case";
import {
  Divider,
  Rating,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import Image from "@/components/image/Image";
import { TMDB_IMAGE } from "@/utils/urlImage";
import useLocales from "@/locales/useLocales";

type Props = {
  movie: RootObjectDetail;
};

const MovieDetailSummary = ({ movie, ...other }: Props) => {
  const theme = useTheme();

  const { translate } = useLocales();

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

        <Typography variant="h4">{movie?.title}</Typography>

        {movie?.tagline && (
          <Typography variant="body1" fontStyle="italic">
            {movie?.tagline}
          </Typography>
        )}

        <Stack direction="row" alignItems="center" spacing={1}>
          <Rating value={movie?.vote_average / 2} precision={0.1} readOnly />

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            ({movie?.vote_average} / 10)
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <CustomBreadcrumbs
            sx={{ mb: 0 }}
            links={[
              { name: `${movie?.runtime}min` },
              { name: `${movie?.release_date}` },
              {
                name: `${movie?.production_countries[0].iso_3166_1}`,
              },
            ]}
          />
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack direction="row" alignItems="center" spacing={3}>
          <Typography variant="body1" sx={{ fontWeight: "fontWeightMedium" }}>
            {`${translate("production")}`}
          </Typography>

          <Tooltip title={movie?.production_companies[0].name}>
            <Image
              alt={movie?.production_companies[0].name}
              src={`${TMDB_IMAGE}${movie?.production_companies[0].logo_path}`}
              sx={{ borderRadius: 1.5, maxWidth: "95px" }}
            />
          </Tooltip>

          <Tooltip title={movie?.production_companies[1].name}>
            <Image
              alt={movie?.production_companies[1].name}
              src={`${TMDB_IMAGE}${movie?.production_companies[1].logo_path}`}
              sx={{ borderRadius: 1.5, maxWidth: "95px" }}
            />
          </Tooltip>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MovieDetailSummary;
