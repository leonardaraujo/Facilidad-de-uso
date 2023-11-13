import IUserLogin from '../interfaces/IUserLogin';
import apiLeodan from './api';
export const fLogin = async (data: IUserLogin) => {
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
