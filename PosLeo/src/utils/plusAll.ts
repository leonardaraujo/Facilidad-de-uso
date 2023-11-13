import { IProductQuantity } from '../interfaces/Product.interface';

const plusAll = (products: Array<IProductQuantity>) => {
  let suma = 0;
  products.forEach((product) => {
    suma += product.price * product.quantity;
  });
  return suma;
};
export default plusAll