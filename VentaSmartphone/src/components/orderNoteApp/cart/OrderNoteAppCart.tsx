import { IProductQuantity } from '../../../interfaces/IProduct';
import { LayoutOrderNoteAppCart } from '../../styles/orderNoteApp/orderNoteAppCart.styles';
import AddProductButton from './AddProductButton';
import Cart from './Cart';
import Total from './Total';

const OrderNoteAppCart = ({
  products,
}: {
  products: Array<IProductQuantity>;
}) => {

  return (
    <LayoutOrderNoteAppCart>
      <AddProductButton></AddProductButton>
      <Cart products={products}></Cart>
      <Total products={products}></Total>
    </LayoutOrderNoteAppCart>
  );
};
export default OrderNoteAppCart;
