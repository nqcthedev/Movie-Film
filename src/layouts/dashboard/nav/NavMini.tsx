// @mui
import { Stack, Box } from '@mui/material';
// config
import { NAV } from '@/config-global';
// utils
import { hideScrollbarX } from '@/utils/cssStyle';
// components
import Logo from '@/components/logo';

//
import navConfig from './config-navigation';
import NavToggleButton from './NavToggleButton';
import { NavSectionMini } from '@/components/nav-section';

// ----------------------------------------------------------------------

export default function NavMini() {
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD_MINI },
      }}
    >
      <NavToggleButton
        sx={{
          top: 22,
          left: NAV.W_DASHBOARD_MINI - 12,
        }}
      />

      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: 'fixed',
          width: NAV.W_DASHBOARD_MINI,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScrollbarX,
        }}
      >
        <Logo sx={{ mx: 'auto', my: 2 }} />

        <NavSectionMini data={navConfig} />
      </Stack>
    </Box>
  );
}
