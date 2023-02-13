import {
  AppBar,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { FC, useState } from "react";
import { BoxToolBar } from "./NavbarStyled";

import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';

const Navbar:FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("max-width:600px");
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)
  const handleMobileOpen = () => {
    setIsMobileOpen((preOpenMobile) => !preOpenMobile)
  }
  return (
    <>
      <AppBar position="fixed">
        <BoxToolBar>
          {isMobile && (
            <IconButton color="inherit" edge="start" sx={{ outline: "none" }} onClick={handleMobileOpen}>
              <Menu open={false} />
            </IconButton>
          )}
        </BoxToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;
