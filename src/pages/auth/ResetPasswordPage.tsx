import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Link, Typography } from '@mui/material';
// routes
import { PATH_AUTH } from '@/routes/path';
// components
import Iconify from '../../components/iconify';
// sections
import AuthResetPasswordForm from '@/sections/auth/AuthResetPasswordForm';
// assets
import { PasswordIcon } from '@/assets/icons';

// ----------------------------------------------------------------------



const ResetPasswordPage = () => {
  return (
    <>
    <Helmet>
      <title>Reset Password | 4K Movile</title>
    </Helmet>

    {/* <Register/> */}
    </>
  )
}

export default ResetPasswordPage