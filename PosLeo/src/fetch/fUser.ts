import apiLeodan from './api';
import IUserLogin from '../interfaces/UserLogin.interface';
export const  fLogin = async (data: IUserLogin) => {
  console.log(data);
  const respond = await apiLeodan.post('/auth/login', data);
  return respond;
};
export const fGetUser = async (token: string | null) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const respond = await apiLeodan.get('/auth/getUser', config);
  return respond;
};
