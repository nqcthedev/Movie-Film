// i18n
import './locales/i18n';

// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';


// @mui
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Routes
import Router from "@/routes";
//Redux
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";
// Locales
import ThemeLocalization from "@/locales/ThemeLocalization";
// Theme
import ThemeProvider from "@/theme";
// Auth
import { AuthProvider } from "./auth/FireBaseContext";
// components
import ScrollToTop from "@/components/scroll-to-top";
import { SettingsProvider, ThemeSettings } from "./components/settings";
import MotionLazyContainer from "@/components/animate/MotionLazyContainer";


import SnackbarProvider from "@/components/snackbar/SnackbarProvider";

function App() {
  return (
   <AuthProvider>
     <HelmetProvider>
      <ReduxProvider store={store}>
       
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
      </ReduxProvider>
    </HelmetProvider>
   </AuthProvider>
  );
}

export default App;
