import styled from "@emotion/styled";
import { IconButton, Theme, ThemeOptions, Toolbar } from "@mui/material";

export const BoxToolBar = styled(Toolbar)(({ theme }: any) => ({
  [theme.breakpoints.up("sm")]: {
    marginLeft: "350px",
    flexWrap: "wrap",
    height: "120px",
    display: "flex",
    justifyContent: "space-between",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    flexWrap: "wrap",
  },
}));



export const BoxIconButtonDark = styled(IconButton)(({ theme }: any) => ({}));
