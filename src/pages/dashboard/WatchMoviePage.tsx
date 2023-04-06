import { useSettingsContext } from "@/components/settings";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Card,
  Grid,
  Stack,
  Typography,
  Rating,
  Divider,
  Tooltip,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";
import { PATH_DASHBOARD } from "@/routes/path";
import useLocales from "@/locales/useLocales";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { useParams } from "react-router-dom";
import { useGetMovieQuery } from "@/redux/apiStore";
import Label from "@/components/label/Label";
import { sentenceCase } from "change-case";
import { fShortenNumber } from "@/utils/formatNumber";
import Image from "@/components/image/Image";
import { TMDB_IMAGE } from "@/utils/urlImage";
import { _socials } from "@/_mock/arrays";
import { useDispatch, useSelector } from "@/redux/store";
import { useSnackbar } from "@/components/snackbar";
import { addToFavourite, deleteMovie } from "@/redux/slices/movie";
import ForwardedTooltip from "@/components/tool-tip-custom/TooltipCustom";
import Iconify from "@/components/iconify/Iconify";

// ------------------------------------------------------------------------

const WatchMoviePage = () => {

  const { translate } = useLocales();

  const { id } = useParams();

  const { data, isLoading } = useGetMovieQuery({ id });

  const { favourite } = useSelector((state) => state.persisted);

  const [isId, setIsId] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const handleNavigate = (event: any, path: any) => {
    event.preventDefault();
    if (path.value === "website") {
      window.open(`${data?.homepage}`, "_blank");
    } else if (path.value === "imdb") {
      window.open(`https://www.imdb.com/title/${data?.imdb_id}`, "_blank");
    }
  };

  const handleLike = () => {
    setIsId(true);
    const movieFavourite = {
      id: data?.id,
      name: data?.name,
      title: data?.title,
      backdrop_path: data?.backdrop_path,
      vote_average: data?.vote_average,
      popularity: data?.popularity,
    };
    dispatch(addToFavourite(movieFavourite));
    return enqueueSnackbar("Đã thêm phim vào danh sách yêu thích", {
      variant: "success",
    });
  };

  const handleUnlike = () => {
    setIsId(false);
    dispatch(deleteMovie(data?.id));
    return enqueueSnackbar("Đã xoá phim khỏi danh sách", {
      variant: "error",
    });
  };

  useEffect(() => {
    favourite.forEach((fav: any) => {
      if (fav.id === data?.id) {
        return setIsId(true);
      }
    });
  }, [favourite, data]);

  return (
    <>
      <Helmet>
        <title>{`Movie: Watch ${data?.title} | 4K Movie`}</title>
      </Helmet>

      <Container maxWidth={false}>
        <CustomBreadcrumbs
          heading={`${translate("watchMovie")}`}
          links={[
            { name: `${translate("home")}`, href: PATH_DASHBOARD.root },
            { name: `${translate("detail")}` },
            {
              name: `${translate("watchMovie")}`,
            },
            { name: data?.title },
          ]}
        />

        <Card
          sx={{
            position: "relative",
            paddingBottom: { xs: "100%", md: "75%", lg: "56.25%" },
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src={`https://www.2embed.to/embed/tmdb/movie?id=${id}`}
            title="Movie player"
            frameBorder="0"
            allowFullScreen
          />
        </Card>

        <Grid container spacing={6} my={10}>
          <Grid item xs={12} md={6} lg={7}>
            <Stack spacing={3}>
              <Label
                variant="soft"
                color={data?.status === "Released" ? "success" : "error"}
                sx={{ textTransform: "uppercase", mr: "auto" }}
              >
                {sentenceCase(data?.status || "")}
              </Label>

              <Typography variant="h4">{data?.title || data?.name}</Typography>

              {data?.tagline && (
                <Typography variant="body1" fontStyle="italic">
                  {data?.tagline}
                </Typography>
              )}

              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating
                  value={data?.vote_average / 2}
                  precision={0.1}
                  readOnly
                />

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  ({fShortenNumber(data?.popularity)}
                  reviews)
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <CustomBreadcrumbs
                  sx={{ mb: 0 }}
                  links={[
                    { name: `${data?.runtime}min` },
                    { name: `${data?.release_date}` },
                    {
                      name: `${data?.production_countries[0]?.iso_3166_1}`,
                    },
                  ]}
                />
              </Stack>

              <Typography>{data?.overview}</Typography>
            </Stack>
          </Grid>
          <Divider
            sx={{ borderStyle: "dashed" }}
            orientation="vertical"
            flexItem
          />
          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <Stack
                spacing={2}
                direction="row"
                alignItems="flex-start"
                justifyContent="flex-start"
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
                    <IconButton
                      onClick={(event) => handleNavigate(event, social)}
                    >
                      <Iconify icon={social.icon} color={social.color} />
                    </IconButton>
                  </ForwardedTooltip>
                ))}
              </Stack>

              <Stack direction="row" alignItems="center" spacing={3}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "fontWeightMedium" }}
                >
                  {`${translate("production")}`}:
                </Typography>

                <Tooltip title={data?.production_companies[0]?.name}>
                  <Image
                    alt={data?.production_companies[0]?.name}
                    src={`${TMDB_IMAGE}${data?.production_companies[0]?.logo_path}`}
                    sx={{ borderRadius: 1.5, maxWidth: "95px" }}
                  />
                </Tooltip>

                <Tooltip title={data?.production_companies[1]?.name}>
                  <Image
                    alt={data?.production_companies[1]?.name}
                    src={`${TMDB_IMAGE}${data?.production_companies[1]?.logo_path}`}
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
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "fontWeightMedium" }}
                >
                  {`${translate("genres")}`}:
                </Typography>
                {data?.genres.map((genre: any) => (
                  <Typography variant="body2" key={genre?.id}>
                    {genre?.name},
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default WatchMoviePage;
