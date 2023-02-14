import { AppBar, Avatar, Box, IconButton, Tooltip, useMediaQuery, useTheme, Menu, MenuItem, Typography, Badge, Drawer } from "@mui/material";
import React, { FC, useContext, useState } from "react";
import { BoxIconButton, BoxIconButtonDark, BoxToolBar } from "./NavbarStyled";

import {
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { ColorModeContext } from "@/utils/toogleColorMode";
import { ToggleColorModeType } from "@/types/Context";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Search from "../Search";
import SideBar from "../SideBar";


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Navbar: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("max-width:600px");
  const colorMode: ToggleColorModeType = useContext(ColorModeContext)
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const handleMobileOpen = () => {
    setIsMobileOpen((preOpenMobile) => !preOpenMobile);
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar position="fixed">
        <BoxToolBar>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
          {isMobile && (
            <BoxIconButton
              onClick={handleMobileOpen}
            >
              {/* <Menu /> */}
            </BoxIconButton>
          )}
          <BoxIconButtonDark onClick={colorMode.colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness7/> : <Brightness4/>}
          </BoxIconButtonDark>
          {!isMobile && <Search/>}
          </Box>
          <Box sx={{ flexGrow: 0, display:'flex', alignItem:'center' }}>
          <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </MenuItem>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </BoxToolBar>
      </AppBar>
      <Box>
      {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="left"
              open={isMobileOpen}
              onClose={() => setIsMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              // classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <SideBar setMobileOpen={setIsMobileOpen} />
            </Drawer>
          ) : (
            <Drawer  variant="permanent" open>
              <SideBar setMobileOpen={setIsMobileOpen} />
            </Drawer>
          )}
      </Box>
    </>
  );
};

export default Navbar;
