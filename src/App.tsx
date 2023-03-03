// @mui
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { BrowserRouter } from "react-router-dom";
import Router from "@/routes";
import { Provider as ReduxProvider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import ScrollToTop from "@/components/scroll-to-top";
import { SettingsProvider, ThemeSettings } from "./components/settings";
import MotionLazyContainer from "@/components/animate/MotionLazyContainer";
import ThemeProvider from "@/theme";
import ThemeLocalization from "@/locales/ThemeLocalization";
import SnackbarProvider from "@/components/snackbar/SnackbarProvider";
function App() {
  return (
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <SettingsProvider>
              <BrowserRouter>
                <ScrollToTop />
                <MotionLazyContainer>
                  <ThemeProvider>
                    <ThemeSettings>
                      <ThemeLocalization>
                       <SnackbarProvider>
                       <Router />
                       </SnackbarProvider>
                      </ThemeLocalization>
                    </ThemeSettings>
                  </ThemeProvider>
                </MotionLazyContainer>
              </BrowserRouter>
            </SettingsProvider>
          </LocalizationProvider>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  );
}

export default App;
