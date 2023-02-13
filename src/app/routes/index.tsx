import { isAthenticate } from "@/utils/auth";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import DashboardLayout from "../pages/Layout/DashboardLayout";
import path from "./path";
import Dashboard from "../pages/dashboard";
export default function Router() {
  const location = useLocation();
  return useRoutes([
    {
      path: path.root,
      element: (
        <DashboardLayout />
      ),
      children: [
      ],
    },
  ]);
}
