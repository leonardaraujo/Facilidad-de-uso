import { IProductQuantity } from '../../../interfaces/IProduct';
import totalQuantityPrice from '../../../utils/totalQuantityPrice';
import {
  ContainerTotalUnits,
  LayoutCartMoney,
  LayoutCartTotal,
} from '../../styles/orderNoteApp/orderNoteAppCart.styles';
import numeral from 'numeral';
const Total = ({ products }: { products: Array<IProductQuantity> }) => {
  const { totalQuantity, totalPrice } = totalQuantityPrice(products);
  return (
    <LayoutCartTotal>
      <ContainerTotalUnits>
        <p style={{ color: 'gray' }}>#prenda/s: </p>
        <p style={{ color: 'gray' }}>{totalQuantity} uds</p>
      </ContainerTotalUnits>
      <LayoutCartMoney>
        Total: S/{numeral(totalPrice).format('0.00')}
      </LayoutCartMoney>
    </LayoutCartTotal>
  );
};
export default Total;
