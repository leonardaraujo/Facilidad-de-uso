import * as yup from 'yup';
const productSchema = yup.object().shape({
  name: yup
    .string()
    .max(60, 'Nombre muy largo')
    .required('El nombre es requerido'),
  price: yup
    .number()
    .typeError('El campo esta vacio!')
    .required('El precio no puede ser 0')
    .moreThan(0, 'El precio debe ser mayor a 0'),
  quantity: yup
    .number()
    .typeError('El campo esta vacio')
    .required('La cantidad no puede ser 0')
    .moreThan(0, 'La cantidad debe ser mayor a 0'),
});
export default productSchema;
