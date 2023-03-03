// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, IconButton } from '@mui/material';
// utils
import { bgBlur } from '@/utils/cssStyle';
// hooks
import useOffSetTop from '@/hooks/useOffSetTop';
import useResponsive from '@/hooks/useResponsive';
// config
import { HEADER, NAV } from '@/config-global';
// component
import Logo from "@/components/logo";
import iconify from '@/components/iconify';
import { useSettingsContext } from '@/components/settings';
//
