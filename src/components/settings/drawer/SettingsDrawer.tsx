import { useState } from "react";

//@mui
import {
  alpha,
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
// utils
import { bgBlur } from "@/utils/cssStyle";
// config
import { NAV } from "@/config-global";
//
import Iconify from "@/components/iconify";
import Scrollbar from "@/components/scrollbar";

import { defaultSettings } from "../config-setting";
import { useSettingsContext } from "../SettingsContext";
import ToggleButton from "./ToggleButton";
import BadgeDot from "./BadgeDot";
import Block from "./Block";
import ModeOptions from "./ModeOptions";
import ColorPresetsOptions from "./ColorPresetsOptions";
import FullScreenOptions from "./FullScreenOptions";
import LayoutOptions from "./LayoutOptions";

// ----------------------------------------------------------------------

const SPACING = 2.5;

export default function SettingsDrawer() {
  const { themeMode, onResetSetting, themeLayout } = useSettingsContext();

  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notDefault = themeMode !== defaultSettings.themeMode ||  themeLayout !== defaultSettings.themeLayout;

  return (
    <>
      {!open && (
        <ToggleButton
          open={open}
          notDefault={notDefault}
          onToggle={handleToggle}
        />
      )}
      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        BackdropProps={{ invisible: true }}
        PaperProps={{
          sx: {
            ...bgBlur({
              color: theme.palette.background.default,
              opacity: 0.9,
            }),
            width: NAV.W_BASE,
            boxShadow: `-24px 12px 40px 0 ${alpha(
              theme.palette.mode === "light"
                ? theme.palette.grey[500]
                : theme.palette.common.black,
              0.16
            )}`,
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ py: 2, pr: 1, pl: SPACING }}
        >
          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
            Settings
          </Typography>
          <Tooltip title="Reset">
            <Box sx={{ position: "relative" }}>
              {notDefault && <BadgeDot />}
              <IconButton onClick={onResetSetting}>
                <Iconify icon="ic:round-refresh" />
              </IconButton>
            </Box>
          </Tooltip>
          <IconButton onClick={handleClose}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>
        <Divider sx={{ borderStyle: "dashed" }} />
        <Scrollbar sx={{ p: SPACING, pb: 0 }}>
          <Block title="Mode">
            <ModeOptions />
          </Block>
          <Block title="Layout">
            <LayoutOptions />
          </Block>
          <Block title="Presets">
            <ColorPresetsOptions />
          </Block>
        </Scrollbar>
        <Box sx={{ p: SPACING, pt: 0 }}>
          <FullScreenOptions />
        </Box>
      </Drawer>
    </>
  );
}
