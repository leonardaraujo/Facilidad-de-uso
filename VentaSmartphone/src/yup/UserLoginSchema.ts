import * as yup from 'yup';
import IUserLogin from '../interfaces/IUserLogin';

const userLoginSchema = yup.object<IUserLogin>().shape({
  username: yup.string().trim().required('Es necesario el usuario'),
  password: yup.string().required('Es necesaria la contraseña'),
});
export default userLoginSchema;
