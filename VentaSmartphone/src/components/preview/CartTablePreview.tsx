import { IProductQuantity } from '../../interfaces/IProduct';
import {
  ContainerProductsTable,
  FullWithTable,
  FullWithTableCollapse,
  NameTdCart,
  NameThCart,
  PriceTdCart,
  PriceThCart,
  QuantityTdCart,
  QuantityThCart,
  StyledTBody,
  StyledTHead,
  StyledTrProduct,
  SubTotalTdCart,
  SubTotalThCart,
} from '../styles/general/table.styles';
import { LayoutAppCartHeadBody } from '../styles/orderNoteApp/orderNoteAppCart.styles';
import numeral from 'numeral';
import { ContainerTablePreview } from '../styles/preview/previewCart.styles';
const CartTablePreview = ({
  products,
}: {
  products: Array<IProductQuantity>;
}) => {
  return (
    <ContainerTablePreview>
      <LayoutAppCartHeadBody>
        <FullWithTableCollapse>
          <StyledTHead>
            <tr>
              <QuantityThCart>Cant</QuantityThCart>
              <NameThCart>Nombre producto</NameThCart>
              <PriceThCart>Precio</PriceThCart>
              <SubTotalThCart>Sub</SubTotalThCart>
            </tr>
          </StyledTHead>
        </FullWithTableCollapse>

        <ContainerProductsTable>
          <FullWithTable>
            <StyledTBody>
              {products
                .slice()
                .reverse()
                .map((product) => (
                  <StyledTrProduct key={product.id}>
                    <QuantityTdCart>{product.quantity}</QuantityTdCart>
                    <NameTdCart>{product.name}</NameTdCart>
                    <PriceTdCart>
                      {numeral(product.price).format('0.00')}
                    </PriceTdCart>
                    <SubTotalTdCart>
                      {numeral(product.price * product.quantity).format('0.00')}
                    </SubTotalTdCart>
                  </StyledTrProduct>
                ))}
            </StyledTBody>
          </FullWithTable>
        </ContainerProductsTable>
      </LayoutAppCartHeadBody>
    </ContainerTablePreview>
  );
};
export default CartTablePreview;
