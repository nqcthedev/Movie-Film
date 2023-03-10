import { Link as RouterLink } from "react-router-dom";
// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from "@mui/material";
// auth
import { useAuthContext } from "@/auth/useAuthContext";
// routes
import { PATH_AUTH } from "@/routes/path";
// layouts
import LoginLayout from "@/layouts/login";
//
import AuthLoginForm from './AuthLoginForm';
// import AuthWithSocial from './AuthWithSocial';

// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuthContext();

  console.log(method);

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

        <AuthLoginForm />

    </LoginLayout>
  );
}
