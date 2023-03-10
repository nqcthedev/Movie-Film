//
import { Navigate, useRoutes } from "react-router-dom";
// components
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
// auth
import GuestGuard from "@/auth/GuestGuard";
// page

import LoginPage from "@/pages/auth/LoginPage";
import GeneralAppPage from "@/pages/dashboard/GeneralAppPage";
import CommunityPage from "@/pages/dashboard/CommunityPage";

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
