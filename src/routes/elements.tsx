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
export const CommunityPage = Loadable(lazy(() => import('@/pages/dashboard/CommunityPage')));


