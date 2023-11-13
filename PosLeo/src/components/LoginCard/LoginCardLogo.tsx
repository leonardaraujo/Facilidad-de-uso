import loginImage from '../../assets/loginImage.svg';
import {
  ImageLogin,
  LayoutLoginCardLogo,
} from '../style/login/LoginCard.styles';
const LoginCardLogo = () => {
  return (
    <LayoutLoginCardLogo>
      <ImageLogin src={loginImage}></ImageLogin>
    </LayoutLoginCardLogo>
  );
};
export default LoginCardLogo;
