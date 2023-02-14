import React, { useState, useMemo, createContext, FC } from "react";
import { ThemeProvider, createTheme, PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

export const ColorModeContext: any = createContext();

const ToggleColorMode = ({ children }: any) => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...(mode === "light" && {
          main: "#F3F4FD",
        }),
        ...(mode === "dark" && {
          main: "#212329",
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: "#212329",
          paper: "#212329",
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  //Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={{ mode, setMode, colorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
