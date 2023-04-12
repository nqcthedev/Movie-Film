import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '@/components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component:ElementType)  => (props: any) => (
  <Suspense fallback={<LoadingScreen/>}>
    <Component {...props}/>
  </Suspense>
);



// ----------------------------------------------------------------------

// AUTH
export const LoginPage = Loadable(lazy(() => import('@/pages/auth/LoginPage')));
export const RegisterPage = Loadable(lazy(() => import('@/pages/auth/RegisterPage')));
export const VerifyCodePage = Loadable(lazy(() => import('@/pages/auth/VerifyCodePage')));
// export const NewPasswordPage = Loadable(lazy(() => import('@/pages/auth/NewPasswordPage')));
export const ResetPasswordPage = Loadable(lazy(() => import('@/pages/auth/ResetPasswordPage')));
export const LoginByPhoneNumber = Loadable(lazy(() => import('@/sections/auth/LoginPhoneNumber')));

// DASHBOARD: GENERAL
export const GeneralAppPage = Loadable(lazy(() => import('@/pages/dashboard/GeneralAppPage')));
export const TrendingPage = Loadable(lazy(() => import('@/pages/dashboard/TrendingPage')));
export const PopularPage = Loadable(lazy(() => import('@/pages/dashboard/PopularPage')));
export const TopRatePage = Loadable(lazy(() => import('@/pages/dashboard/TopRatePage')));
export const UpComingPage = Loadable(lazy(() => import('@/pages/dashboard/UpComingPage')));
export const TVAiringTodayPage = Loadable(lazy(() => import('@/pages/dashboard/TVAiringTodayPage')));
export const TVOnTheAirPage = Loadable(lazy(() => import('@/pages/dashboard/TVOnTheAir')));
export const TVTopRatePage = Loadable(lazy(() => import('@/pages/dashboard/TVTopRate')));
export const TVTopPopularPage = Loadable(lazy(() => import('@/pages/dashboard/TVPopular')));
export const MoviesDetailPage = Loadable(lazy(() => import('@/pages/dashboard/MoviesDetailPage')));
export const FavouritePage = Loadable(lazy(() => import('@/pages/dashboard/FavouritePage')));
export const WatchListPage = Loadable(lazy(() => import('@/pages/dashboard/WatchListPage')));
export const WatchMoviePage = Loadable(lazy(() => import('@/pages/dashboard/WatchMoviePage')));


// MAIN

export const Page404 = Loadable(lazy(() => import('../pages/Page404')));


