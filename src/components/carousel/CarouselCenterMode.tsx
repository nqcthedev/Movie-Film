import { RootObjectSeasonTV, Episode } from "@/interface/SeasonTv";
import React, { useRef } from "react";
import { bgGradient } from "@/utils/cssStyle";
// components
import Image from "@/components/image";
import Iconify from "@/components/iconify";
import TextMaxLine from "@/components/text-max-line";
import Carousel, { CarouselArrows } from "@/components/carousel";
import { Box, useTheme, Paper, CardContent, alpha, Link } from "@mui/material";
import { TMDB_IMAGE_W500 } from "@/utils/urlImage";
import { RootObject } from "@/interface/Movies";
import { Link as RouterLink } from 'react-router-dom';
import { PATH_DASHBOARD } from "@/routes/path";

// ----------------------------------------------------------------------

type Props = {
  dataTV?: RootObjectSeasonTV;
  dataMovie?: RootObject;
  type: string;
};

const CarouselCenterMode = ({ dataTV, type, dataMovie }: Props) => {
  const carouselRef = useRef<Carousel | null>(null);

  const theme = useTheme();

  const carouselSettings = {
    slidesToShow: 4,
    centerMode: true,
    centerPadding: "60px",
    rtl: Boolean(theme.direction === "rtl"),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: "0" },
      },
    ],
  };

  const carouselSettings1 = {
    slidesToShow: 4,
    centerMode: true,
    autoplay: true,
    centerPadding: "60px",
    rtl: Boolean(theme.direction === "rtl"),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: "0" },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  if (type === "movie") {
    return (
      <Box sx={{ overflow: "hidden", position: "relative" }}>
        <CarouselArrows
          filled
          icon="noto:rightwards-hand"
          onNext={handleNext}
          onPrevious={handlePrev}
        >
          <Carousel ref={carouselRef} {...carouselSettings1}>
            {dataMovie?.results?.map((item) => (
              <Box key={item.id} sx={{ px: 1 }}>
                <CarouselItem item={item} type="movie" id={item.id}/>
              </Box>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>
    );
  }

  return (
    <Box sx={{ overflow: "hidden", position: "relative" }}>
      <CarouselArrows
        filled
        icon="noto:rightwards-hand"
        onNext={handleNext}
        onPrevious={handlePrev}
      >
        <Carousel ref={carouselRef} {...carouselSettings}>
          {dataTV?.seasons?.map((item: Episode) => (
            <Box key={item.id} sx={{ px: 1 }}>
              <CarouselItem item={item} type="tv" id={item.id}/>
            </Box>
          ))}
        </Carousel>
      </CarouselArrows>
    </Box>
  );
};

export default CarouselCenterMode;

// ----------------------------------------------------------------------

type CarouselItemProps = {
  item: any;
  type: string;
  id:number;
};

function CarouselItem({ item, type, id }: CarouselItemProps) {
  const theme = useTheme();


  const linkTo = PATH_DASHBOARD.detail.view(id, type);

  return (
    <Paper sx={{ borderRadius: 2, overflow: "hidden", position: "relative" }}>
      <Image
        alt={item?.name}
        src={`${TMDB_IMAGE_W500}${item?.poster_path}`}
        ratio="3/4"
      />

      <CardContent
        sx={{
          bottom: -1,
          zIndex: 9,
          width: "100%",
          textAlign: "left",
          position: "absolute",
          color: "common.white",
          ...bgGradient({
            direction: "to top",
            startColor: `${theme.palette.grey[900]} 25%`,
            endColor: `${alpha(theme.palette.grey[900], 0)} 100%`,
          }),
        }}
      >
        {type === "movie" ? (
          <TextMaxLine>{item?.title}</TextMaxLine>
        ) : (
          <TextMaxLine>{item?.name}</TextMaxLine>
        )}

        <Link
          color="inherit"
          variant="overline"
          component={RouterLink}
          to={linkTo}
          sx={{
            opacity: 0.72,
            alignItems: "center",
            display: "inline-flex",
            transition: theme.transitions.create("opacity"),
            "&:hover": { opacity: 1 },
          }}
        >
          learn More
          <Iconify icon="eva:arrow-forward-fill" width={16} sx={{ ml: 1 }} />
        </Link>
      </CardContent>
    </Paper>
  );
}
