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

// ----------------------------------------------------------------------

type Props = {
  data: RootObjectSeasonTV;
};

const CarouselCenterMode = ({data}:Props) => {
  const carouselRef = useRef<Carousel | null>(null);

  console.log(data)

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

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Box sx={{ overflow: "hidden", position: "relative" }}>
      <CarouselArrows
        filled
        icon="noto:rightwards-hand"
        onNext={handleNext}
        onPrevious={handlePrev}
      >
        <Carousel ref={carouselRef} {...carouselSettings}>
          {data?.seasons?.map((item: Episode) => (
            <Box key={item.id} sx={{px:1}}>
                <CarouselItem item={item}/>
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
  item:Episode
}

function CarouselItem({item} :CarouselItemProps ) {
  const theme = useTheme();

  return (
      <Paper sx={{borderRadius:2, overflow:"hidden", position:"relative"}}>
        <Image
            alt={item?.name}
            src={`${TMDB_IMAGE_W500}${item?.poster_path}`}
            ratio="3/4"
          />

          <CardContent  sx={{
          bottom: 0,
          zIndex: 9,
          width: '100%',
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
          ...bgGradient({
            direction: 'to top',
            startColor: `${theme.palette.grey[900]} 25%`,
            endColor: `${alpha(theme.palette.grey[900], 0)} 100%`,
          }),
        }}>
            <TextMaxLine variant="h4" paragraph>
          {item?.name}
        </TextMaxLine>

        <Link
          color="inherit"
          variant="overline"
          sx={{
            opacity: 0.72,
            alignItems: 'center',
            display: 'inline-flex',
            transition: theme.transitions.create('opacity'),
            '&:hover': { opacity: 1 },
          }}
        >
          learn More
          <Iconify icon="eva:arrow-forward-fill" width={16} sx={{ ml: 1 }} />
        </Link>
          </CardContent>
      </Paper>
  )

}
