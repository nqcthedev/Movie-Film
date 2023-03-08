//
import {  Navigate, useRoutes } from "react-router-dom";;
// components
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
// config
import { PATH_AFTER_LOGIN } from "@/config-global";
// page
import GeneralAppPage from "@/pages/dashboard/GeneralAppPage";

// ---------------------------------------------------------------------------------------------------------------
export default function Router() {
  return useRoutes([
  // Dashboard
  {
    path:"dashboard" ,
    element: (
      <DashboardLayout />
    ),
    children: [
      { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
      { path: 'app', element: <GeneralAppPage /> },
    ],
  },
  ]);
}
