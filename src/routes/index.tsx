//
import { Navigate, useRoutes } from "react-router-dom";
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
  TVOnTheAirPage,
  TVTopPopularPage,
  TVTopRatePage,
  MoviesDetailPage,
  FavouritePage,
  WatchListPage,
  WatchMoviePage,
  Page404,
  UserAccountPage,
  ComingSoonPage,
} from "./elements";
// layouts
import CompactLayout from "@/layouts/compact/CompactLayout";
import TVAiringTodayPage from "@/pages/dashboard/TVAiringTodayPage";

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
        { path: "airingToday", element: <TVAiringTodayPage /> },
        { path: "onTheAir", element: <TVOnTheAirPage /> },
        { path: "tvPopular", element: <TVTopPopularPage /> },
        { path: "tvTopRate", element: <TVTopRatePage /> },
        { path: "favourite", element: <FavouritePage /> },
        { path: "watch-list", element: <ComingSoonPage /> },
        { path: 'coming-soon', element: <ComingSoonPage /> },
        {
          path: "detail",
          children: [
            {
              path: ":type/:id",
              element: <MoviesDetailPage />,
            },
          ],
        },
        {
          path: "watch",
          children: [
            {
              path: ":type/:id",
              element: <WatchMoviePage />,
            },
          ],
        },
        // User
        {
          path: "user",
          children: [{ path: "account", element: <UserAccountPage /> }],
        },
      ],
    },

    {
      element: <CompactLayout />,
      children: [
        {
          path: "404",
          element: <Page404 />,
        },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
