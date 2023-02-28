import { memo } from "react";
// @mui
import { Box } from "@mui/material";
import { ScrollbarProps } from "./styles";
import { StyledRootScrollBar, StyledScrollbar } from "./types";
//

// ------------------------------------------------------------------------------------------

function Scrollbar({ children, sx, ...other }: ScrollbarProps) {
  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

  const isMobile =
    /Android|webOS|iPhone|ipad|ipod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  if (isMobile) {
    return (
      <Box sx={{ overflowX: "auto", ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <StyledRootScrollBar>
      <StyledScrollbar clickOnTrack={false} sx={sx} {...other}>
        {children}
      </StyledScrollbar>
    </StyledRootScrollBar>
  );
}

export default memo(Scrollbar);
