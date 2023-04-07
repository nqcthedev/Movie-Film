import Label from "@/components/label/Label";
import { RootObjectDetail } from "@/interface/DetailMovie";
import { sentenceCase } from "change-case";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  IconButton,
  Rating,
  Slide,
  Stack,
  Tooltip,
  Typography,
  Link,
} from "@mui/material";
import React, { forwardRef, useEffect, useState } from "react";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import Image from "@/components/image/Image";
import { TMDB_IMAGE } from "@/utils/urlImage";
import useLocales from "@/locales/useLocales";
import Iconify from "@/components/iconify/Iconify";
import { _socials } from "@/_mock/arrays";
import { fShortenNumber } from "@/utils/formatNumber";
import ForwardedTooltip from "@/components/tool-tip-custom/TooltipCustom";
import { TransitionProps } from "@mui/material/transitions";
import { addToFavourite, deleteMovie } from "@/redux/slices/movie";
import { useDispatch, useSelector } from "@/redux/store";
import { useSnackbar } from "@/components/snackbar";
import { PATH_DASHBOARD } from "@/routes/path";
import { Link as RouterLink } from "react-router-dom";
import { useGetVideoTrailersQuery } from "@/redux/apiStore";

// ---------------------------------------------------------------------------------------------

type Props = {
  movie: RootObjectDetail;
  type: any;
};

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

const MovieDetailSummary = ({ movie, type, ...other }: Props) => {
  const { id } = movie;

  const { translate } = useLocales();

  const { data, isLoading } = useGetVideoTrailersQuery({ id, type });

  const [openTrailer, setOpenTrailer] = useState<boolean>(false);

  const { favourite } = useSelector((state) => state.persisted);

  const [isId, setIsId] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const handleWatchTrailer = () => {
    setOpenTrailer(true);
  };

  const handleCloseTrailer = () => {
    setOpenTrailer(false);
  };

  const linkTo = PATH_DASHBOARD.watchMovie(movie?.id, type);

  const handleNavigate = (event: any, path: any) => {
    event.preventDefault();
    if (path.value === "website") {
      window.open(`${movie?.homepage}`, "_blank");
    } else if (path.value === "imdb") {
      window.open(`https://www.imdb.com/title/${movie?.imdb_id}`, "_blank");
    }
  };

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
      if (fav.id === movie?.id) {
        return setIsId(true);
      }
    });
  }, [favourite, movie]);

  console.log(movie);

  const renderTime = () => {
    if(type === "tv") {
      return `Season ${movie?.number_of_seasons} / ${movie?.number_of_episodes} tập`
    } else {
      return `${movie?.runtime} min`
    }
  }
  return (
    <>
      <Stack
        spacing={3}
        sx={{ p: (theme) => ({ md: theme.spacing(5, 5, 0, 2) }) }}
        {...other}
      >
        <Stack spacing={3}>
          <Label
            variant="soft"
            color={movie?.status === "Released" ? "success" : "error"}
            sx={{ textTransform: "uppercase", mr: "auto" }}
          >
            {sentenceCase(movie?.status || "")}
          </Label>

          <Typography variant="h4">{movie?.title || movie?.name}</Typography>

          {movie?.tagline && (
            <Typography variant="body1" fontStyle="italic">
              {movie?.tagline}
            </Typography>
          )}

          <Stack direction="row" alignItems="center" spacing={1}>
            <Rating value={movie?.vote_average / 2} precision={0.1} readOnly />

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              ({fShortenNumber(movie?.popularity)}
              reviews)
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <CustomBreadcrumbs
              sx={{ mb: 0 }}
              links={[
                { name: `${movie?.release_date || movie?.last_air_date}` },
                { name: renderTime() },
                {
                  name: `${movie?.production_countries[0].name || movie?.production_companies[0].name  || movie?.origin_country[0]   }`,
                },
              ]}
            />
          </Stack>

          <Divider sx={{ borderStyle: "dashed" }} />

          <Stack direction="row" alignItems="center" spacing={3}>
            <Typography variant="body1" sx={{ fontWeight: "fontWeightMedium" }}>
              {`${translate("production")}`}:
            </Typography>

            <Tooltip title={movie?.production_companies[0]?.name}>
              <Image
                alt={movie?.production_companies[0]?.name}
                src={`${TMDB_IMAGE}${movie?.production_companies[0]?.logo_path}`}
                sx={{ borderRadius: 1.5, maxWidth: "95px" }}
              />
            </Tooltip>

            <Tooltip title={movie?.production_companies[1]?.name}>
              <Image
                alt={movie?.production_companies[1]?.name}
                src={`${TMDB_IMAGE}${movie?.production_companies[1]?.logo_path}`}
                sx={{ borderRadius: 1.5, maxWidth: "95px" }}
              />
            </Tooltip>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            flexWrap={"wrap"}
          >
            <Typography variant="body1" sx={{ fontWeight: "fontWeightMedium" }}>
              {`${translate("genres")}`}:
            </Typography>
            {movie?.genres.map((genre) => (
              <Typography variant="body2" key={genre?.id}>
                {genre?.name},
              </Typography>
            ))}
          </Stack>

          <Divider sx={{ borderStyle: "dashed" }} />

          <Stack direction="row" spacing={2}>
            <Link underline="none" component={RouterLink} to={linkTo}>
              <Button
                fullWidth
                size="large"
                color="warning"
                variant="contained"
                startIcon={<Iconify icon="ic:baseline-play-circle-outline" />}
                sx={{ whiteSpace: "nowrap" }}
              >
                {`${translate("watchNow")}`}
              </Button>
            </Link>

            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              startIcon={<Iconify icon="mingcute:movie-line" />}
              onClick={handleWatchTrailer}
            >
              {`${translate("trailer")}`}
            </Button>
          </Stack>

          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <ForwardedTooltip
              title={!isId ? "Add Favourite" : "Remove Favourite"}
            >
              <FormControlLabel
                sx={{ mr: 0 }}
                control={
                  <Checkbox
                    color="error"
                    checked={isId}
                    icon={<Iconify icon="eva:heart-fill" />}
                    checkedIcon={<Iconify icon="eva:heart-fill" />}
                    onChange={isId ? handleUnlike : handleLike}
                  />
                }
                label=""
              />
            </ForwardedTooltip>
            {_socials.map((social) => (
              <ForwardedTooltip key={social.value} title={social.name}>
                <IconButton onClick={(event) => handleNavigate(event, social)}>
                  <Iconify icon={social.icon} color={social.color} />
                </IconButton>
              </ForwardedTooltip>
            ))}
          </Stack>
        </Stack>
      </Stack>

      <Dialog
        open={openTrailer}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseTrailer}
        sx={{
          "& .MuiDialog-paper": {
            width: { xs: "100%", md: "50%" },
            height: { xs: "50%", md: "50%" },
            maxWidth: "none",
          },
        }}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {movie?.title || movie?.name} - Trailer
        </DialogTitle>

        <DialogContent>
          {data?.length > 0 && (
            <iframe
              frameBorder="0"
              title="Trailer"
              src={`https://www.youtube.com/embed/${
                data[0]?.key || data[1]?.key
              }`}
              allow="autoplay"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            />
          )}
        </DialogContent>

        <DialogActions>
          <Button color="inherit" onClick={handleCloseTrailer}>
            Disagree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MovieDetailSummary;
