import React from "react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { Link, Typography } from "@mui/material";
// routes
import { PATH_AUTH } from "@/routes/path";
// components
import Iconify from "../../components/iconify";
// sections
import AuthResetPasswordForm from "@/sections/auth/AuthResetPasswordForm";
// assets
import { PasswordIcon } from "@/assetss/icons";

// ----------------------------------------------------------------------

const ResetPasswordPage = () => {
  return (
    <>
      <Helmet>
        <title>Reset Password | 4K Movile</title>
      </Helmet>

      <PasswordIcon sx={{ mb: 5, height: 96 }} />

      <Typography variant="h3">Forgot yourn password?</Typography>

      <Typography sx={{ color: "text.secondary", mb: 5 }}>
        Please enter the email address associated with your account and We will
        email you a link to reset your password.
      </Typography>

      <AuthResetPasswordForm />

      <Link
        component={RouterLink}
        to={PATH_AUTH.login}
        color="inherit"
        variant="subtitle2"
        sx={{ mt: 3, mx: "auto", alignItems: "center", display: "inline-flex" }}
      >
        <Iconify icon="eva:chevron-left-fill" width={16}/>
          Return to sign in
      </Link>
    </>
  );
};

export default ResetPasswordPage;
