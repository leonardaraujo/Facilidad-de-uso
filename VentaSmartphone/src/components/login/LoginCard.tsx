// @ts-nocheck
import { StyledButton } from '../styles/general/button.styles';
import { Text } from '../styles/general/text.styles';
import { LoginCardLayout } from '../styles/login/loginCard.styles';
import { TextField } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useSessionStorage } from 'usehooks-ts';
import PRIVATE_ROUTES from '../../constants/routes/PRIVATE_ROUTES';
import { fLogin } from '../../fetch/fUser';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import IUserLogin from '../../interfaces/IUserLogin';
import userLoginSchema from '../../yup/UserLoginSchema';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginCard = () => {
  const [isLogging, setIsLogging] = useState(false);
  const navigate = useNavigate();
  const [errorSession, setErrorSession] = useState(false);
  const [token, setToken] = useSessionStorage('token', '');
  const sessionToken = sessionStorage.getItem('token');
  const sendCredentials = (data: IUserLogin) => {
    setIsLogging(true);
    fLogin(data)
      .then((respond) => {
        setToken(respond.data.token);
        navigate(`/${PRIVATE_ROUTES.APP}`, { replace: true });
      })
      .catch(() => {
        setIsLogging(false);
        setErrorSession(true);
      });
  };
  const { register, handleSubmit, formState } = useForm<IUserLogin>({
    resolver: yupResolver(userLoginSchema),
  });
  const { errors } = formState;
  if (sessionToken) {
    return <Navigate to={PRIVATE_ROUTES.APP} replace={true} />;
  } else {
    return (
      <form onSubmit={handleSubmit(sendCredentials)}>
        <LoginCardLayout>
          <Text>Usuario</Text>
          <TextField
            sx={{
              input: {
                background: 'white',
                fontSize: 20,
              },
            }}
            {...register('username')}
            error={!!errors.username}
            helperText={errors.username?.message}
          ></TextField>
          <Text>Contraseña</Text>
          <TextField
            type="password"
            sx={{
              input: {
                background: 'white',
                fontSize: 20,
              },
            }}
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          ></TextField>
          {errorSession ? (
            <label style={{ color: 'red' }}>
              Usuario o contraseña incorrecta
            </label>
          ) : (
            <label></label>
          )}
          <StyledButton
            disabled={isLogging}
            type="submit"
            mode="success"
            size="large"
          >
            Ingresar
          </StyledButton>
        </LoginCardLayout>
      </form>
    );
  }
};
export default LoginCard;
