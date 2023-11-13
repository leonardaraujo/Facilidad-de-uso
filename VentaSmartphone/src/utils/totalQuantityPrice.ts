import { IProductQuantity } from '../interfaces/IProduct';
const totalQuantityPrice = (products: Array<IProductQuantity>) => {
  let totalPrice = 0;
  let totalQuantity = 0;
  products.forEach((product) => {
    totalPrice += product.price * product.quantity;
    totalQuantity += product.quantity;
  });
  return { totalQuantity, totalPrice };
};
export default totalQuantityPrice;
