import { Result } from "@/interface/Trending";
import React, { useEffect, useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// components
import Iconify from "@/components/iconify";
import Label from "@/components/label";
import Image from "@/components/image";
// routes
import { PATH_DASHBOARD } from "@/routes/path";
import {
  Box,
  Card,
  Checkbox,
  Fab,
  FormControlLabel,
  Link,
  Rating,
  Stack,
} from "@mui/material";
import { TMDB_IMAGE } from "@/utils/urlImage";
import { useDispatch, useSelector } from "@/redux/store";
import { addToFavourite, deleteMovie } from "@/redux/slices/movie";
import { useSnackbar } from "@/components/snackbar";

// ----------------------------------------------------------------------

type Props = {
  movie: Result;
  isFavourite?: boolean;
};

const MoviesListCard = ({ movie, isFavourite }: Props) => {
  const { id, name, title, backdrop_path, vote_average, popularity } = movie;

  const { favourite } = useSelector((state) => state.persisted);

  const [isId, setIsId] = useState<boolean>(false);

  const [checked, setChecked] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const linkTo = PATH_DASHBOARD.detail.view(id);

  // const handleAddFavourite = async () => {
  //   setChecked(true)
  //   try {
  //     if (isId === true && !isFavourite) {
  //       return enqueueSnackbar("Phim đã tồn tại trong danh sách yêu thích", {
  //         variant: "warning",
  //       });
  //     } else if (!isFavourite) {
  //       const movieFavourite = {
  //         id,
  //         name,
  //         title,
  //         backdrop_path,
  //         vote_average,
  //         popularity,
  //       };
  //       dispatch(addToFavourite(movieFavourite));
  //       return enqueueSnackbar("Đã thêm phim vào danh sách yêu thích", {
  //         variant: "success",
  //       });
  //     } else if (isFavourite) {
  //       dispatch(deleteMovie(id));
  //       return enqueueSnackbar("Đã xoá phim khỏi danh sách", {
  //         variant: "error",
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const randomIndex = useMemo(() => {
    return Math.floor(Math.random() * 3);
  }, []);

  const status = randomIndex >= 1 ? "Hot" : "New";

  const handleLike = () => {
    setIsId(true);
    const movieFavourite = {
      id: movie.id,
      name: movie.name,
      title: movie.title,
      backdrop_path: movie.backdrop_path,
      vote_average: movie.vote_average,
      popularity: movie.popularity,
    };
    dispatch(addToFavourite(movieFavourite));
    return enqueueSnackbar("Đã thêm phim vào danh sách yêu thích", {
      variant: "success",
    });
  };

  const handleUnlike = () => {
    setIsId(false);
    dispatch(deleteMovie(movie?.id));
    return enqueueSnackbar("Đã xoá phim khỏi danh sách", {
      variant: "error",
    });
  };

  useEffect(() => {
    favourite.forEach((fav: any) => {
      if (fav.id === id) {
        return setIsId(true);
      }
    });
  }, [favourite]);

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
          // onClick={handleAddFavourite}
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
          <FormControlLabel
            sx={{ mr: -1.2 }}
            control={
              <Checkbox
                color="error"
                checked={isId}
                icon={<Iconify color="white" icon="eva:heart-fill" />}
                checkedIcon={
                  <Iconify color="white" icon="solar:trash-bin-minimalistic-broken" />
                }
                onChange={isId ? handleUnlike : handleLike}
              />
            }
            label=""
          />
        </Fab>

        <Link component={RouterLink} to={linkTo}>
          <Image
            alt={title || name}
            src={`${TMDB_IMAGE}${backdrop_path}`}
            ratio="3/4"
            sx={{ borderRadius: 1.5 }}
          />
        </Link>

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
