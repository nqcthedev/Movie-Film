// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Button,
  CardContent,
  Typography,
  CardProps,
  Link,
} from "@mui/material";
// utils
import { bgGradient } from "@/utils/cssStyle";
// components
import Image from "@/components/image";
import Carousel, { CarouselDots } from "@/components/carousel";
import { Result } from "./types";
import { TMDB_IMAGE } from "@/utils/urlImage";
import useLocales from "@/locales/useLocales";
import { Link as RouterLink } from "react-router-dom";
import { PATH_DASHBOARD } from "@/routes/path";

// ----------------------------------------------------------------------

const StyledOverlay = styled("div")(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  position: "absolute",
}));

// ----------------------------------------------------------------------

interface Props extends CardProps {
  list: Result[];
}

export default function HomeNewMovie({ list, ...other }: Props) {
  const theme = useTheme();

  const carouselSettings = {
    speed: 1000,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === "rtl"),
    ...CarouselDots({
      sx: {
        right: 24,
        bottom: 24,
        position: "absolute",
      },
    }),
  };

  return (
    <Card {...other}>
      <Carousel {...carouselSettings}>
        {list.slice(0, 9).map((item) => (
          <CarouselItem key={item.id} item={item} />
        ))}
      </Carousel>
    </Card>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  item: Result;
};

function CarouselItem({ item }: CarouselItemProps) {
  const { translate } = useLocales();

  const linkToWatchMovie = PATH_DASHBOARD.watchMovie(item?.id, "movie");
  return (
    <Box sx={{ position: "relative" }}>
      <CardContent
        sx={{
          left: 0,
          bottom: 0,
          zIndex: 9,
          maxWidth: "80%",
          position: "absolute",
          color: "common.white",
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.48 }}>
        {`${translate("new")}`}
        </Typography>

        <Typography noWrap variant="h5" sx={{ mt: 1, mb: 3 }}>
          {item?.title}
        </Typography>
        <Link underline="none" component={RouterLink} to={linkToWatchMovie}>
        <Button variant="contained">{`${translate("watchNow")}`}</Button>
        </Link>
      </CardContent>

      <StyledOverlay />

      <Image
        alt={item?.title}
        src={`${TMDB_IMAGE}${item?.backdrop_path}`}
        sx={{
          height: { xs: 280, xl: 460 },
        }}
      />
    </Box>
  );
}
