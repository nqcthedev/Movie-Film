// fr
import { m } from "framer-motion";
//@mui
import { Container, styled } from "@mui/material";
import { Typography, CardProps, Stack } from "@mui/material";
//
import { TextAnimate, MotionContainer, varFade } from "@/components/animate";
import React, { memo, useMemo, useState } from "react";
import { ItemPropsData } from "./types";
// ultis
import { TMDB_IMAGE } from "@/utils/urlImage";


const StyledRoot = styled("div")<{ image: string }>(({ theme, image }) => ({
  width: "100%",
  overflow: "hidden",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundImage: `url(${TMDB_IMAGE}${image})`,
  borderRadius: Number(theme.shape.borderRadius) * 2,
  [theme.breakpoints.up("md")]: {
    height: 460,
  },
}));

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  description?: string;
  img?: React.ReactNode;
  action?: React.ReactNode;
  data: ItemPropsData;
}

const HomeWelcome = ({
  data,
  title,
  description,
  action,
  img,
  ...other
}: Props) => {
  const [bannerData, setBannerData] = useState<any>();
  console.log(`url(${TMDB_IMAGE}${bannerData?.backdrop_path})`);
  useMemo(() => {
    const randomData = Math.floor(Math.random() * (19 - 0 + 1) + 0);
    setBannerData(data[randomData]);
  }, []);

  console.log(bannerData)

  return (
    <StyledRoot image={bannerData?.backdrop_path} {...other}>
      <Container maxWidth={false} component={MotionContainer}>
        <Stack
          flexGrow={1}
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start" }}
          sx={{
            pl: 5,
            py: { xs: 5, md: 0 },
            pr: { xs: 5, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <TextAnimate
            text={bannerData?.title}
            sx={{ color: "primary.main", typography: "h2" }}
            variants={varFade().inRight}
          />

          <m.div variants={varFade().inRight}>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                mb: { xs: 3, xl: 5 },
                mt: 3,
                color: "common.white",
                fontWeight: 400,
              }}
            >
              {bannerData?.overview}
            </Typography>
          </m.div>

          {action && action}
        </Stack>
      </Container>
    </StyledRoot>
  );
};

export default memo(HomeWelcome);
