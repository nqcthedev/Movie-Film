import { useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Button,
} from "@mui/material";
// routes
import { PATH_DASHBOARD } from "@/routes/path";
// auth
import { useAuthContext } from "@/auth/useAuthContext";
// components
import { CustomAvatar } from "@/components/custom-avatar";
import { useSnackbar } from "@/components/snackbar";
import MenuPopover from "@/components/menu-popover";
import IconButtonAnimate from "@/components/animate/IconButtonAnimate";

// ----------------------------------------------------------------------

const OPTIONS = [
  {
    label: "Home",
    linkTo: "/",
  },
  {
    label: "Profile",
    linkTo: PATH_DASHBOARD.user.profile,
  },
  {
    label: "Settings",
    linkTo: PATH_DASHBOARD.user.account,
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const navigate = useNavigate();

  const { user, logout } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleClickItem = (path: string) => {
    handleClosePopover();
    navigate(path);
  };

  return (
    <>
      {!user ? (
        <Button variant="contained">Sign in</Button>
      ) : (
        <>
          <IconButtonAnimate
            onClick={handleOpenPopover}
            sx={{
              p: 0,
              ...(openPopover && {
                "&:before": {
                  zIndex: 1,
                  content: "''",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  position: "absolute",
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                },
              }),
            }}
          >
            <CustomAvatar
              src={user?.photoURL}
              alt={user?.displayName}
              name={user?.displayName}
            />
          </IconButtonAnimate>
          <MenuPopover
            open={openPopover}
            onClose={handleClosePopover}
            sx={{ width: 200, p: 0 }}
          >
            <Box sx={{ my: 1.5, px: 2.5 }}>
              <Typography variant="subtitle2" noWrap>
                {user?.displayName}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                noWrap
              >
                {user?.email}
              </Typography>
            </Box>

            <Divider sx={{ borderStyle: "dashed" }} />

            <Stack sx={{ p: 1 }}>
              {OPTIONS.map((option) => (
                <MenuItem
                  key={option.label}
                  onClick={() => handleClickItem(option.linkTo)}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Stack>
          </MenuPopover>
        </>
      )}
    </>
  );
}
