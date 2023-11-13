import { LayoutNotFound } from '../components/style/layout/NotFound.layout';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { StyledButton } from '../components/style/general/Button.styles';
import { Text } from '../components/style/general/Text.styles';
import { useNavigate } from 'react-router-dom';
import PRIVATE_ROUTES from '../constants/routes/PRIVATE_ROUTES';
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <LayoutNotFound>
      <AiFillQuestionCircle size={100}></AiFillQuestionCircle>
      <Text>Esta página no existe</Text>
      <StyledButton
        onClick={() => {
          navigate(`/${PRIVATE_ROUTES.APP}`, { replace: true });
        }}
      >
        Volver al inicio
      </StyledButton>
    </LayoutNotFound>
  );
};
export default NotFound;
