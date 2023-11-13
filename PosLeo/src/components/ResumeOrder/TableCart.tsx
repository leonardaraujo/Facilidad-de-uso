import { IProductQuantity } from '../../interfaces/Product.interface';
import {
  FullWithTable,
  NameTh,
  StyledTBody,
  StyledTHead,
  StyledTr,
} from '../style/general/Table.styles';
import { LayoutTableCart } from '../style/resumeOrder/Cart.styles';
import numeral from 'numeral';
const TableCart = ({ products }: { products: Array<IProductQuantity> }) => {
  return (
    <LayoutTableCart>
      <FullWithTable>
        <StyledTHead>
          <tr>
            <NameTh>Nombre</NameTh>
            <th>Cant</th>
            <th>Precio</th>
            <th>Sub</th>
          </tr>
        </StyledTHead>
        <StyledTBody>
          {products.map((product: IProductQuantity) => (
            <StyledTr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{numeral(product.price).format('0.00')}</td>
              <td>
                {numeral(product.quantity * product.price).format('0.00')}
              </td>
            </StyledTr>
          ))}
        </StyledTBody>
      </FullWithTable>
    </LayoutTableCart>
  );
};
export default TableCart;
