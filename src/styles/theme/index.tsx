import { createTheme, CssBaseline, StyledEngineProvider, ThemeOptions, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import palette from './palette';
interface ThemeConfigProps {
  children:React.ReactNode
}


export default function ThemeConfig(props:ThemeConfigProps) {
  const {children} = props;
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette,
    }),
    [],
  );

  const theme = createTheme(themeOptions)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
} 


