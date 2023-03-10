import React from "react";
// @mui
import { Typography, Stack } from "@mui/material";
// components
import Logo from "../../components/logo";
import Image from "../../components/image";
//
import {
  StyledRoot,
  StyledSectionBg,
  StyledSection,
  StyledContent,
} from "./styles";

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  illustration?: string;
  children: React.ReactNode;
};
const LoginLayout = ({ children, illustration, title }: Props) => {
  return (
    <StyledRoot>
      <Logo
        sx={{
          zIndex: 9,
          position: "absolute",
          mt: { xs: 1.5, md: 5 },
          ml: { xs: 2, md: 5 },
        }}
      />

      <StyledSection>
        <Typography
          variant="h3"
          sx={{ mb: 10, maxWidth: 480, textAlign: "center" }}
        >
          {title || "Hi, Welcome back 4K Movie "}
        </Typography>

        <Image
          disabledEffect
          visibleByDefault
          alt="auth"
          src={illustration || '/assets/illustrations/illustration_dashboard1.jpeg'}
          sx={{ maxWidth: 1, borderRadius:"24px" }}
        />

        <StyledSectionBg />
      </StyledSection>

      <StyledContent>
        <Stack sx={{ width: 1 }}>{children}</Stack>
      </StyledContent>
    </StyledRoot>
  );
};

export default LoginLayout;
