import * as yup from 'yup';
import IClient from '../interfaces/IClient';

const yupClientSchema = yup.object<IClient>().shape({
  dni: yup
    .string()
    .transform((o, c) => (o === '' ? null : c))
    .nullable()
    .min(8, 'El dni debe ser de 8 digitos')
    .max(8, 'El dni debe ser de 8 digitos'),
  name: yup
    .string()
    .transform((o, c) => (o === '' ? null : c))
    .nullable(),
});
export default yupClientSchema;
