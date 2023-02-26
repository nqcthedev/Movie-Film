import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Tooltip,
  useTheme,
  Menu as MenuWrapper,
  MenuItem,
  Typography,
  Badge,
  Drawer,
} from "@mui/material";
import React, { FC, useContext, useState } from "react";
import { BoxIconButtonDark } from "./NavbarStyled";

import { Brightness4, Brightness7, Menu } from "@mui/icons-material";
import { ColorModeContext } from "@/utils/toogleColorMode";
import { ToggleColorModeType } from "@/interface/Context";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Search from "../Search";
import SideBar from "../SideBar";
import palette from "@/styles/theme/palette";
import ModalLogin from "../ModalLogin";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Navbar: FC = () => {
  const theme = useTheme();
  const colorMode: ToggleColorModeType = useContext(ColorModeContext);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isShowModalLoggin, setIsShowModalLoggin] = useState<boolean>(false);
  const [openModal, setOpenModal] = React.useState(false);
  const handleClose = () => setOpenModal(false);

  const handleMobileOpen = () => {
    setIsMobileOpen((preOpenMobile) => !preOpenMobile);
  };

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleShowFormLogin = () => {
    setOpenModal(true);
  };
  return (
    <>
      <AppBar position="fixed">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: { xs: "60px", sm: "80px", md: "120px" },
            marginLeft: { xs: "0px", md: "370px" },
            p: "0px 22px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              onClick={handleMobileOpen}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Menu />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Search />
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex", alignItem: "center" }}>
            <BoxIconButtonDark onClick={colorMode.colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </BoxIconButtonDark>
            <MenuItem
              sx={{
                "&:hover": {
                  background: "transparent",
                },
              }}
            >
              <IconButton sx={{ margin: "0px 10px 0px 0px" }}>
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </MenuItem>
            {isShowModalLoggin ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            ) : (
              <Typography
                sx={{
                  margin: "16px 0px",
                  cursor: "pointer",
                  "&:hover": {
                    transition: "color .5s ease-out",
                    color: palette.primary.lighter,
                  },
                }}
                onClick={handleShowFormLogin}
              >
                Đăng nhập
              </Typography>
            )}
            <MenuWrapper
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </MenuWrapper>
          </Box>
        </Box>
      </AppBar>
      <Box>
        <Drawer
          variant="temporary"
          anchor="left"
          open={isMobileOpen}
          onClose={() => setIsMobileOpen((prevMobileOpen) => !prevMobileOpen)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "358px" },
          }}
        >
          <SideBar setMobileOpen={setIsMobileOpen} />
        </Drawer>

        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "358px" },
          }}
        >
          <SideBar setMobileOpen={setIsMobileOpen} />
        </Drawer>
        <ModalLogin open={openModal} handleOpen={handleShowFormLogin} handleClose={handleClose} />
      </Box>
    </>
  );
};

export default Navbar;
