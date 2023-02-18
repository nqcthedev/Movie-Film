import { isAthenticate } from "@/utils/auth";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import DashboardLayout from "../pages/Layout/DashboardLayout";
import path from "./path";
import Dashboard from "../pages/dashboard";
import Upcomming from "../pages/upcomming";
import Toprate from "../pages/toprate";
import Popular from "../pages/popular/Popular";
export default function Router() {
  const location = useLocation();
  return useRoutes([
    {
      path: path.root,
      element: (
        <DashboardLayout />
      ),
      children: [
        {
          element: <Popular />,
          path: path.popular,
        },
        {
          element:  <Toprate/>,
          path: path.topRate,
        },
        {
          element: <Upcomming />,
          path: path.upComming,
        },
      ],
    },
  ]);
}
