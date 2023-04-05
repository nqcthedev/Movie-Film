import { Result } from "@/interface/Trending";
import React, { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
// components
import Iconify from "@/components/iconify";
import Label from "@/components/label";
import Image from "@/components/image";
// routes
import { PATH_DASHBOARD } from "@/routes/path";
import { Box, Card, Fab, Link, Rating, Stack } from "@mui/material";
import { TMDB_IMAGE } from "@/utils/urlImage";

// ----------------------------------------------------------------------

type Props = {
  movie: Result;
};

const MoviesListCard = ({ movie}: Props) => {
  const { id, name, title, backdrop_path, vote_average, popularity } = movie;

  const linkTo = PATH_DASHBOARD.detail.view(id);

  const handleAddFavourite = () => {};

  const randomIndex = useMemo(() => {
    return Math.floor(Math.random() * 3);
  }, []);

  const status = randomIndex >= 1 ? "Hot" : "New"

  return (
    <Card
      sx={{
        "&:hover .add-favourite-btn": {
          opacity: 1,
        },
      }}
    >
      <Box sx={{ position: "relative", p: 1 }}>
        {status && (
          <Label
            variant="filled"
            color={(status === "Hot" && "error") || "info"}
            sx={{
              top: 16,
              right: 16,
              zIndex: 9,
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            {status}
          </Label>
        )}

        <Fab
          color="error"
          size="medium"
          className="add-favourite-btn"
          onClick={handleAddFavourite}
          sx={{
            right: 16,
            bottom: 16,
            zIndex: 9,
            transform: "translateY(-235%)",
            opacity: 0,
            position: "absolute",
            transition: (theme) =>
              theme.transitions.create("all", {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }),
          }}
        >
          <Iconify icon="mdi:favourite" />
        </Fab>

        <Image
          alt={title || name}
          src={`${TMDB_IMAGE}${backdrop_path}`}
          ratio="3/4"
          sx={{ borderRadius: 1.5 }}
        />

        <Stack spacing={2.5} sx={{ p: 2.8 }}>
          <Link
            component={RouterLink}
            to={linkTo}
            color="inherit"
            variant="subtitle2"
            noWrap
          >
            {title || name}
          </Link>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          px={1.5}
        >
          <Rating
            value={vote_average - 3.5}
            precision={0.1}
            readOnly
            size="small"
            sx={{ ml: -1 }}
          />

          <Stack direction="row" spacing={0.5} alignItems="center">
            <Iconify icon="ic:outline-remove-red-eye" />

            <Box component="span">{popularity.toFixed(2)}</Box>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};

export default MoviesListCard;
