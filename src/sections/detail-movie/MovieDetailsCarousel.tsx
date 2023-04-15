import React from "react";
import { useState, useRef, useEffect } from "react";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Box } from "@mui/material";
// utils
import { bgGradient } from "@/utils/cssStyle";
// @types
// components
import Image from "@/components/image";
// import Lightbox from "@/components/lightbox";
import Carousel, {CarouselArrowIndex} from "@/components/carousel";
import { useGetDetailCollectionQuery } from "@/services/apiStore";
import { TMDB_IMAGE } from "@/utils/urlImage";
import { Part } from "@/interface/DetailCollections";
import Lightbox from "@/components/lightbox/Lightbox";

// --------------------------------------------------------------------------------------------

type Props = {
  id: number;
};


const THUMB_SIZE = 64;

type StyledThumbnailsContainerProps = {
  length: number;
};

const StyledThumbnailsContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'length',
})<StyledThumbnailsContainerProps>(({ length, theme }) => ({
  margin: theme.spacing(0, 'auto'),
  position: 'relative',

  '& .slick-slide': {
    opacity: 0.48,
    '&.slick-current': {
      opacity: 1,
    },
    '& > div': {
      padding: theme.spacing(0, 0.75),
    },
  },

  ...(length === 1 && {
    maxWidth: THUMB_SIZE * 1 + 16,
  }),
  ...(length === 2 && {
    maxWidth: THUMB_SIZE * 2 + 32,
  }),
  ...((length === 3 || length === 4) && {
    maxWidth: THUMB_SIZE * 3 + 48,
  }),
  ...(length >= 5 && {
    maxWidth: THUMB_SIZE * 6,
  }),
  ...(length > 2 && {
    '&:before, &:after': {
      ...bgGradient({
        direction: 'to left',
        startColor: `${alpha(theme.palette.background.default, 0)} 0%`,
        endColor: `${theme.palette.background.default} 100%`,
      }),
      top: 0,
      zIndex: 9,
      content: "''",
      height: '100%',
      position: 'absolute',
      width: (THUMB_SIZE * 2) / 3,
    },
    '&:after': {
      right: 0,
      transform: 'scaleX(-1)',
    },
  }),
}));

const MovieDetailsCarousel = ({ id }: Props) => {
  const theme = useTheme();

  const { data, isFetching } = useGetDetailCollectionQuery({ id });

  console.log("detail", data);

  const carousel1 = useRef<Carousel | null>(null);

  const carousel2 = useRef<Carousel | null>(null);

  const [nav1, setNav1] = useState<Carousel>();

  const [nav2, setNav2] = useState<Carousel>();

  const [selectedImage, setSelectedImage] = useState<number>(-1);

  const [currentIndex, setCurrentIndex] = useState<number>(0);


  const carouselSettings1 = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  const carouselSettings2 = {
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: '0px',
    slidesToShow: data?.parts.length > 3 ? 3 : data?.parts.length,
  };

  const imagesLightbox = data?.parts.map((img:Part) => ({ src: img?.backdrop_path }));

  const handleOpenLightbox = (imageUrl: any) => {
    const imageIndex = imagesLightbox.findIndex((image: { src: string; }) => image.src === imageUrl);
    setSelectedImage(imageIndex);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(-1);
  };

  const handlePrev = () => {
    carousel2.current?.slickPrev();
  };

  const handleNext = () => {
    carousel2.current?.slickNext();
  };


  const renderLargeImg = (
    <Box
    sx={{ mb: 3, borderRadius: 2, overflow: 'hidden', position: 'relative' }}
    >
      <Carousel {...carouselSettings1} asNavFor={nav2} ref={carousel1}>
        {data?.parts.map((movie: Part) => (
          <Image
            key={movie?.id}
            alt={movie?.title}
            src={`${TMDB_IMAGE}${movie?.backdrop_path ??  movie?.backdrop_path}`}
            ratio="1/1"
            sx={{ cursor: 'zoom-in' }}
            onClick={() => handleOpenLightbox(movie?.backdrop_path)}
            
          />
        ))}

        <CarouselArrowIndex
          index={currentIndex}
          total={data?.parts.length}
          onNext={handleNext}
          onPrevious={handlePrev}
        />
      </Carousel>
    </Box>
  );

  const renderThumbnails = (
    <StyledThumbnailsContainer length={data?.parts.length}>
      <Carousel {...carouselSettings2} asNavFor={nav1} ref={carousel2}>
        {data?.parts.map((img: Part, index: number) => (
          <Image
            key={img.id}
            disabledEffect
            alt="thumbnail"
            src={`${TMDB_IMAGE}${img?.backdrop_path ??  img?.backdrop_path}`}
            sx={{
              width: THUMB_SIZE,
              height: THUMB_SIZE,
              borderRadius: 1.5,
              cursor: 'pointer',
              ...(currentIndex === index && {
                border: `solid 2px ${theme.palette.primary.main}`,
              }),
            }}
          />
        ))}
      </Carousel>
    </StyledThumbnailsContainer>
  );

  return (
    <>
      <Box
        sx={{
          "& .slick-slide": {
            float: theme.direction === "rtl" ? "right" : "left",
          },
        }}
      >
        {renderLargeImg}

        {renderThumbnails}
      </Box>

      <Lightbox
        index={selectedImage}
        slides={imagesLightbox}
        open={selectedImage >= 0}
        close={handleCloseLightbox}
        onGetCurrentIndex={(index) => setCurrentIndex(index)}
      />
    </>
  );
};

export default MovieDetailsCarousel;
