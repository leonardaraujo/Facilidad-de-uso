import { Outlet, Navigate } from 'react-router-dom';
import { useRef } from 'react';
const AuthGuard = () => {
  const user = useRef(sessionStorage.getItem('token'));
  console.log(user.current);
  return user.current ? <Outlet /> : <Navigate replace to="/login" />;
};
export default AuthGuard;
