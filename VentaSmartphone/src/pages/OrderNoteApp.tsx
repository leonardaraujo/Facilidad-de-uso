import OrderNoteAppButtons from '../components/orderNoteApp/buttons/OrderNoteAppButtons';
import SaveNoteForLateButton from '../components/orderNoteApp/buttons/SaveNoteForLateButton';
import OrderNoteAppCart from '../components/orderNoteApp/cart/OrderNoteAppCart';
import OrderNoteAppClient from '../components/orderNoteApp/client/OrderNoteAppClient';
import { TitleStyled } from '../components/styles/general/text.styles';
import { LayoutOrderNoteApp } from '../components/styles/orderNoteApp/orderNoteApp.layout';
import useOrderNote from '../store/orderNoteStore';
const OrderNoteApp = () => {
  const products = useOrderNote((state) => state.products);
  return (
    <LayoutOrderNoteApp>
      <TitleStyled>Crear nota de venta</TitleStyled>
      <OrderNoteAppClient></OrderNoteAppClient>
      <OrderNoteAppCart products={products}></OrderNoteAppCart>
      <OrderNoteAppButtons></OrderNoteAppButtons>
      <SaveNoteForLateButton></SaveNoteForLateButton>
    </LayoutOrderNoteApp>
  );
};
export default OrderNoteApp;
