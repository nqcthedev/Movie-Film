//
import { useRoutes } from "react-router-dom";
// components
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
// auth
import GuestGuard from "@/auth/GuestGuard";
import {
  TrendingPage,
  GeneralAppPage,
  LoginByPhoneNumber,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  VerifyCodePage,
  PopularPage,
  TopRatePage,
  UpComingPage,
} from "./elements";
// layouts
import CompactLayout from "@/layouts/compact/CompactLayout";

// ---------------------------------------------------------------------------------------------------------------
export default function Router() {
  return useRoutes([
    // Auth
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
        {
          path: "login-by-phone",
          element: (
            <GuestGuard>
              <LoginByPhoneNumber />
            </GuestGuard>
          ),
        },
        {
          path: "register",
          element: (
            <GuestGuard>
              <RegisterPage />
            </GuestGuard>
          ),
        },
        {
          element: <CompactLayout />,
          children: [
            { path: "reset-password", element: <ResetPasswordPage /> },
            // { path: 'new-password', element: <NewPasswordPage /> },
            { path: "verify", element: <VerifyCodePage /> },
          ],
        },
      ],
    },

    // Dashboard
    {
      element: <DashboardLayout />,
      children: [
        { element: <GeneralAppPage />, index: true },
        { path: "trending", element: <TrendingPage /> },
        { path: "popular", element: <PopularPage /> },
        { path: "topRate", element: <TopRatePage /> },
        { path: "upcoming", element: <UpComingPage /> },
      ],
    },
  ]);
}
