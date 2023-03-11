import React from 'react'
// auth
import { useAuthContext } from '@/auth/useAuthContext';
// component
import LoginLayout from '@/layouts/login/LoginLayout'
// @mui
import { Box,Stack, Typography, Link, Tooltip, Alert } from '@mui/material';
// route
import { Link as RouterLink } from "react-router-dom";
import { PATH_AUTH } from "@/routes/path";
import AuthLoginFormPhoneNumber from './AuthLoginFormPhoneNumber';

const LoginPhoneNumber = () => {
  const { method } = useAuthContext();
  
  return (
    <LoginLayout>
       <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">
          Sign in to <strong style={{ color: "red" }}>4K</strong> Movie
        </Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New user?</Typography>

          <Link
            component={RouterLink}
            to={PATH_AUTH.register}
            variant="subtitle2"
          >
            Create an account
          </Link>
        </Stack>

        <Tooltip title={method} placement="left">
          <Box
            component="img"
            alt={method}
            src={`/assets/ic_${method}.png`}
            sx={{ width: 38, height: 38, position: "absolute", right: 0 }}
          />
        </Tooltip>
      </Stack>

      <Alert severity="info" sx={{ mb: 3 }}>
          use email : <strong>user@user.com</strong> / password :
          <strong> user1234</strong>
        </Alert>

        <AuthLoginFormPhoneNumber/>
    </LoginLayout>
  )
}

export default LoginPhoneNumber