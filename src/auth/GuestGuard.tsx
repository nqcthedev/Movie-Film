import { Navigate } from 'react-router-dom';
// routes
import { PATH_DASHBOARD } from '@/routes/path';
// components
import LoadingScreen from '../components/loading-screen';
//
import { useAuthContext } from './useAuthContext';

// ----------------------------------------------------------------------

type GuestGuradProps = {
  children:React.ReactNode;
}

export default function GuestGuard({children}: GuestGuradProps){
  const {isAuthenticated, isInitialized} = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.root} />;
  }

  if(!isInitialized) {
    return <LoadingScreen/>
  }

  return <>{children}</>
}

