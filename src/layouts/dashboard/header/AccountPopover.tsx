import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '@/routes/path';
// auth
// import { useAuthContext } from '@/auth/useAuthContext';
// components
import { CustomAvatar } from '../../../components/custom-avatar';
import { useSnackbar } from '@/components/snackbar';
import MenuPopover from '../../../components/menu-popover';
import  IconButtonAnimate  from '@/components/animate/IconButtonAnimate';


// ----------------------------------------------------------------------


const OPTIONS = [
  {
    label: 'Home',
    linkTo:"/",
  },
  {
    label:"Profile",
    linkTo:PATH_DASHBOARD.user.profile
  },
  {
    label:"Settings",
    linkTo:PATH_DASHBOARD.user.account
  }
]

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const navigate = useNavigate();
  

}