
import {  useRoutes } from "react-router-dom";
import { PATH_ROUTER } from "./path";
import Upcomming from "../pages/upcomming";
import Toprate from "../pages/toprate";
import Popular from "../pages/popular/Popular";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
export default function Router() {
  return useRoutes([
  // Dashboard
  {
    path:"/" ,
    element: (
      <DashboardLayout />
    ),
    children: [
      {
        element: <Popular />,
        path: PATH_ROUTER.popular,
      },
      {
        element:  <Toprate/>,
        path: PATH_ROUTER.toprate,
      },
      {
        element: <Upcomming />,
        path: PATH_ROUTER.upcomming,
      },
    ],
  },
  ]);
}
