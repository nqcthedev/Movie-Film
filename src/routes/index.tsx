//
import { useRoutes } from "react-router-dom";
// components
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
// auth
import GuestGuard from "@/auth/GuestGuard";
// page

import LoginPage from "@/pages/auth/LoginPage";
import GeneralAppPage from "@/pages/dashboard/GeneralAppPage";
import CommunityPage from "@/pages/dashboard/CommunityPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import ResetPasswordPage from "@/pages/auth/ResetPasswordPage";

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
          path: "register",
          element: (
            <GuestGuard>
              <RegisterPage />
            </GuestGuard>
          ),
        },
        {
          element:<CompactLayout/>,
          children:[
            {path:"reset-password", element:<ResetPasswordPage/>},
            // { path: 'new-password', element: <NewPasswordPage /> },
            // { path: 'verify', element: <VerifyCodePage /> },
          ]
        }
      ],
    },

    // Dashboard
    {
      element: <DashboardLayout />,
      children: [
        { element: <GeneralAppPage />, index: true },
        { path: 'community', element: <CommunityPage /> },
      ],
    },
  ]);
}
