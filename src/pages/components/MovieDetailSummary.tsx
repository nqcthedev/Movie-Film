import Label from "@/components/label/Label";
import { RootObjectDetail } from "@/interface/DetailMovie";
import { sentenceCase } from "change-case";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Rating,
  Slide,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { forwardRef, useState } from "react";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import Image from "@/components/image/Image";
import { TMDB_IMAGE } from "@/utils/urlImage";
import useLocales from "@/locales/useLocales";
import Iconify from "@/components/iconify/Iconify";
import { _socials } from "@/_mock/arrays";
import { fShortenNumber } from "@/utils/formatNumber";
import ForwardedTooltip from "@/components/tool-tip-custom/TooltipCustom";
import { TransitionProps } from "@mui/material/transitions";

// ---------------------------------------------------------------------------------------------

type Props = {
  movie: RootObjectDetail;
};

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);


const MovieDetailSummary = ({ movie, ...other }: Props) => {
  const { translate } = useLocales();

  const [openTrailer, setOpenTrailer] = useState<boolean>(false);


  const handleWatchTrailer = () => {
    setOpenTrailer(true)
  };

  const handleCloseTrailer = () => {
    setOpenTrailer(false)
  }

  const handleWatchMovie = () => {}

  const handleNavigate = (event: any, path: any) => {
    event.preventDefault();
    if (path.value === "website") {
      window.open(`${movie?.homepage}`, "_blank");
    } else if (path.value === "imdb") {
      window.open(`https://www.imdb.com/title/${movie?.imdb_id}`, "_blank");
    }
  };




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

        <Typography variant="h4">{movie?.title}</Typography>

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
            {`${translate("production")}`}:
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
            <Typography variant="body2" key={genre.id}>
              {genre.name},
            </Typography>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack direction="row" spacing={2}>
          <Button
            fullWidth
            size="large"
            color="warning"
            variant="contained"
            startIcon={<Iconify icon="ic:baseline-play-circle-outline" />}
            onClick={handleWatchMovie}
            sx={{ whiteSpace: "nowrap" }}
          >
            {`${translate("watchNow")}`}
          </Button>

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
          {_socials.map((social) => (
            <ForwardedTooltip key={social.value} title={social.name}>
              <IconButton
                onClick={(event) => handleNavigate(event, social)}
              >
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
          '& .MuiDialog-paper': {
            width: {xs:"100%", md:"50%"},
            height:{xs:"50%", md:"50%"},
            maxWidth: 'none'
          }
        }}
      >
        <DialogTitle id="alert-dialog-slide-title">{movie?.title} - Trailer</DialogTitle>

        <DialogContent>
        {movie?.videos?.results?.length > 0 && (
          <iframe
            frameBorder="0"
            title="Trailer"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?autoplay=1`}
            allow="autoplay"
            allowFullScreen
            style={{width:"100%", height:"100%", borderRadius:"16px"}}
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
