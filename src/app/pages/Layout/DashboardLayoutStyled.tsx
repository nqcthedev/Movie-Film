import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
}));

export const BoxWrapper = styled(Box)(({ theme }) => ({
  flexGrow:1,
  overflow:'auto',
  minHeight: "100%",
}))
