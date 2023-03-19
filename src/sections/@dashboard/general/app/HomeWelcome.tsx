// fr
import { m } from "framer-motion";
//@mui
import { Container, styled } from "@mui/material";
import { Typography, CardProps, Stack } from "@mui/material";
//
import { TextAnimate, MotionContainer, varFade } from "@/components/animate";
import React from "react";

const StyledRoot = styled("div")(({ theme }) => ({
  width:"100%",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  backgroundImage:
    "url(/assets/background/overlay_1.svg), url(/assets/images/contact/hero.jpg)",
  borderRadius: Number(theme.shape.borderRadius) * 2,
  [theme.breakpoints.up("md")]: {
    height: 560,
  },
}));


// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  description?: string;
  img?: React.ReactNode;
  action?: React.ReactNode;
}

const HomeWelcome = ({ title, description, action, img, ...other }: Props) => {
  return (
    <StyledRoot {...other}>
      <Container component={MotionContainer}>
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
            text={title}
            sx={{ color: "primary.main" }}
            variants={varFade().inRight}
          />
          <m.div variants={varFade().inRight}>
          <Typography
          variant="h5"
          sx={{
            opacity: 0.8,
            mb: { xs: 3, xl: 5 },
            mt: 3,
            color: 'common.white',
            fontWeight: 'fontWeightMedium',
          }}
        >
          {description}
        </Typography>
          </m.div>

          {action && action}

        </Stack>
      </Container>
    </StyledRoot>
  );
};

export default HomeWelcome;
