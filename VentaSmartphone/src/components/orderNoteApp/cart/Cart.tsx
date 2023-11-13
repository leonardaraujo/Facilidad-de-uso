import { IProductQuantity } from '../../../interfaces/IProduct';
import {
  ContainerProductsTable,
  EditTdCart,
  EditThCart,
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
} from '../../styles/general/table.styles';
import { LayoutAppCartHeadBody } from '../../styles/orderNoteApp/orderNoteAppCart.styles';
import ButtonEditProduct from './ButtonEditProduct';
import { useState } from 'react';
import numeral from 'numeral';
import ProductPopEdit from './ProductPopEdit';
const Cart = ({ products }: { products: Array<IProductQuantity> }) => {
  const [edit, setEdit] = useState(false);
  const [editedProduct, setEditedProduct] = useState<IProductQuantity>({
    id: '',
    name: '',
    price: 0,
    quantity: 0,
  });
  return (
    <>
      <LayoutAppCartHeadBody>
        <FullWithTableCollapse>
          <StyledTHead>
            <tr>
              <EditThCart></EditThCart>
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
                    <EditTdCart>
                      <ButtonEditProduct
                        onClick={() => {
                          setEditedProduct(product);
                          setEdit(true);
                        }}
                      ></ButtonEditProduct>
                    </EditTdCart>
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
      {edit ? (
        <ProductPopEdit
          closePop={setEdit}
          product={editedProduct}
        ></ProductPopEdit>
      ) : (
        <></>
      )}
    </>
  );
};
export default Cart;
