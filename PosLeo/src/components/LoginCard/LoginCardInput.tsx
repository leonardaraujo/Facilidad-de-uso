// @ts-nocheck
import {
  LayoutInputs,
  LayoutLoginCardInput,
} from '../style/login/LoginCard.styles';
import { Text, Title } from '../style/general/Text.styles';
import { LayoutTextInput } from '../style/login/LoginCard.styles';
import IUserLogin from '../../interfaces/UserLogin.interface';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import { StyledButton } from '../style/general/Button.styles';
import { yupResolver } from '@hookform/resolvers/yup';
import userSchema from '../../validations/userSchema';
import { useSessionStorage } from 'usehooks-ts';
import { fLogin } from '../../fetch/fUser';
import { useNavigate } from 'react-router-dom';
import PRIVATE_ROUTES from '../../constants/routes/PRIVATE_ROUTES';
const LoginCardInput = () => {
  const navigate = useNavigate();
  const [token, setToken] = useSessionStorage('token', '');
  const { register, handleSubmit, formState } = useForm<IUserLogin>({
    resolver: yupResolver(userSchema),
  });
  const { errors } = formState;
  const sendCredentials = (data: IUserLogin) => {
    fLogin(data).then((respond) => {
      console.log(respond.data.token);
      setToken(respond.data.token);
      navigate(`/${PRIVATE_ROUTES.APP}`, { replace: true });
    });
  };
  return (
    <form onSubmit={handleSubmit(sendCredentials)}>
      <LayoutLoginCardInput>
        <Title>Leodan's</Title>
        <LayoutInputs>
          <LayoutTextInput>
            <Text>Usuario</Text>
            <TextField
              sx={{ input: { color: 'white' } }}
              {...register('username')}
              error={!!errors.username}
              helperText={errors.username?.message}
            ></TextField>
          </LayoutTextInput>
          <LayoutTextInput>
            <Text>Contraseña</Text>
            <TextField
              type="password"
              sx={{ input: { color: 'white' } }}
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
            ></TextField>
          </LayoutTextInput>
        </LayoutInputs>
        <StyledButton type="submit">Ingresar</StyledButton>
      </LayoutLoginCardInput>
    </form>
  );
};
export default LoginCardInput;
