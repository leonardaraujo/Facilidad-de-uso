import { LayoutLogin } from '../components/style/layout/Login.layout';
import Logincard from '../components/LoginCard/Logincard';
import { Navigate } from 'react-router-dom';
import PRIVATE_ROUTES from '../constants/routes/PRIVATE_ROUTES';
const Login = () => {
  const token = sessionStorage.getItem('token');
  if (token) {
    return <Navigate to={PRIVATE_ROUTES.APP} replace />;
  } else {
    return (
      <LayoutLogin>
        <Logincard></Logincard>
      </LayoutLogin>
    );
  }
};
export default Login;
