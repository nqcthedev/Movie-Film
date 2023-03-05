// @mui
import { useTheme } from "@mui/material/styles";
import { Stack, AppBar, Toolbar, IconButton } from "@mui/material";
// utils
import { bgBlur } from "@/utils/cssStyle";
// hooks
import useOffSetTop from "@/hooks/useOffSetTop";
import useResponsive from "@/hooks/useResponsive";
// config
import { HEADER, NAV } from "@/config-global";
// component
import Logo from "@/components/logo";
import { useSettingsContext } from "@/components/settings";
import Iconify from "@/components/iconify";
import Searchbar from "./Searchbar";
//

type Props = {
  onOpenNav?: VoidFunction;
};

const Header = ({ onOpenNav }: Props) => {
  const theme = useTheme();

  const { themeLayout } = useSettingsContext();

  const isNavHorizontal = themeLayout === "horizontal";

  const isNavMini = themeLayout === "mini";

  const isDesktop = useResponsive("up", "lg");

  const isOffset = useOffSetTop(HEADER.H_DASHBOARD_DESKTOP) && !isNavHorizontal;

  const renderContent = (
    <>
      {isDesktop && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />}

      {!isDesktop && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1, color: "text.primary" }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Searchbar />

      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{xs: 0.5, sm:1.5}}
      >
        <Lang
      </Stack>
    </>
  );
  return <div>Header</div>;
};

export default Header;
