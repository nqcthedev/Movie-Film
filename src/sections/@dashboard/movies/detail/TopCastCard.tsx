import Image from "@/components/image/Image";
import useLocales from "@/locales/useLocales";
import { PATH_DASHBOARD } from "@/routes/path";
import { TMDB_IMAGE, TMDB_IMAGE_W500 } from "@/utils/urlImage";
import { Card, Link, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

// --------------------------------------------------------------------------------

type Props = {
  cast: any;
};

const TopCastCard = ({ cast }: Props) => {
  

  const linkTo = PATH_DASHBOARD.detail.view(cast?.id);

  return (
    <Card>
     
      <Image
        alt={cast.title}
        src={`${TMDB_IMAGE_W500}${cast.profile_path}`}
        ratio="3/4"
        sx={{ borderRadius: 1.5 }}
      />

      <Stack spacing={2.5} sx={{ p: 2.8 }}>
        <Link
          component={RouterLink}
          to={linkTo}
          color="inherit"
          variant="body1"
          noWrap
          fontWeight={"500"}
        >
          {cast.name}
        </Link>

        <Typography variant="body2" color="text.secondary">
          {cast.character.split("/")[0]}
        </Typography>
      </Stack>
    </Card>
  );
};

export default TopCastCard;
