import React from "react";
import { m } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { Button, Typography } from "@mui/material";
// components
import { MotionContainer, varBounce } from "../components/animate";
import { ForbiddenIllustration } from "@/assetss/illustrations";
import useLocales from "@/locales/useLocales";
// assets

// ----------------------------------------------------------------------

const Page403 = () => {
  const { translate } = useLocales();
  

  return (
    <>
      <Helmet>
        <title> 403 Forbidden | 4K Movie</title>
      </Helmet>

      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
          {`${translate("noPermission")}`}
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: "text.secondary" }}>
          {`${translate("noPermission")}`}
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </m.div>

        <Button component={RouterLink} to="/" size="large" variant="contained">
        {`${translate("gotoHome")}`}
        </Button>
      </MotionContainer>
    </>
  );
};

export default Page403;
