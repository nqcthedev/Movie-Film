import React from "react";
// @mui
import { useTheme } from "@mui/material/styles";
//
import { StyledBadgeStatus } from "./styles";
import { BadgeStatusProps } from "./types";

// ----------------------------------------------------------------------

const BadgeStatus = ({
  size = "medium",
  status = "offline",
  sx,
}: BadgeStatusProps) => {
  const theme = useTheme();

  return (
    <StyledBadgeStatus ownerState={{ status, size }} sx={sx} theme={theme} />
  );
};

export default BadgeStatus;
