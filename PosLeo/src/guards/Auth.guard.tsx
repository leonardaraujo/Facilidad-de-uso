import { Outlet, Navigate } from 'react-router-dom';
import PUBLIC_ROUTES from '../constants/routes/PUBLIC_ROUTES';
const AuthGuard = () => {
  const user = sessionStorage.getItem('token');
  return user ? <Outlet /> : <Navigate replace to={PUBLIC_ROUTES.LOGIN} />;
};
export default AuthGuard;
