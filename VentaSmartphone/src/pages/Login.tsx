import { LoginLayout } from '../components/styles/login/Login.layout';
import logoLeodanWhite from '../assets/image/logoLeodanWhite.png';
import { ImageLeodanLogo } from '../components/styles/general/image.styles';
import LoginCard from '../components/login/LoginCard';
import { Navigate } from 'react-router-dom';
import PRIVATE_ROUTES from '../constants/routes/PRIVATE_ROUTES';
const Login = () => {
  const token = sessionStorage.getItem('token');
  if (token) {
    return <Navigate to={`/${PRIVATE_ROUTES.APP}`} replace={true} />;
  }
  return (
    <LoginLayout>
      <ImageLeodanLogo src={logoLeodanWhite}></ImageLeodanLogo>
      <LoginCard></LoginCard>
    </LoginLayout>
  );
};
export default Login;
