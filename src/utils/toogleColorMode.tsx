import React, { useState, createContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
export const ColorModeContext: any = createContext(undefined);

const ToggleColorMode = ({ children }: any) => {
 
  const [mode, setMode] = useState('light');
  const palette = {
    light: {
      primary: {
        main: '#fff',
        light: '#fff',
        dark: '#fff',

      },
    },
  };

 const getDesignTokens = (mode: any) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: palette.light.primary.main,
              light: palette.light.primary.light,
              dark: palette.light.primary.dark,
            },
  
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // primary: {
            //   main: '#212329',
            //   light: '#212329',
            //   dark: '#212329',
            // },
            // secondary: {
            //   main: '#212329',
            //   light: '#212329',
            //   dark: '#212329',
            // },
            divider: deepOrange[900],
            // background: {
            //   default: '#212329',
            //   paper: '#212329',
            // },
            text: {
              primary: '#FFFFFFFF',
              secondary: grey[500],
            },
          }),
    },
    typography: {
      fontFamily: [
        'Roboto',
        'sans-serif',
      ].join(','),
    },
  });
  

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: any) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );
  //Update the theme only if the mode changes
  return (
    <ColorModeContext.Provider value={{ mode, setMode, colorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
