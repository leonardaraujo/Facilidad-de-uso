import { StyledFullButton } from '../../styles/general/button.styles';
import { LayoutOrderNoteAppButtons } from '../../styles/orderNoteApp/OrderNoteAppButtons.styles';
import useOrderNote from '../../../store/orderNoteStore';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import PRIVATE_ROUTES from '../../../constants/routes/PRIVATE_ROUTES';

const OrderNoteAppButtons = () => {
  const { dni, name } = useOrderNote((state) => ({
    dni: state.client.dni,
    name: state.client.name,
  }));
  const products = useOrderNote((state) => state.products);
  const { deleteClient, deleteAllProducts } = useOrderNote((state) => ({
    deleteClient: state.deleteClient,
    deleteAllProducts: state.deleteAllProducts,
  }));
  const navigate = useNavigate();
  return (
    <LayoutOrderNoteAppButtons>
      <StyledFullButton
        mode="danger"
        disabled={products.length || dni || name ? false : true}
        onClick={() => {
          Swal.fire({
            title: '¿Limpiar toda la nota de pedido?',
            showCancelButton: true,
            confirmButtonText: 'Limpiar todo',
            confirmButtonColor: 'red',
            denyButtonText: `Volver`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              deleteClient();
              deleteAllProducts();
            }
          });
        }}
      >
        Limpiar todo
      </StyledFullButton>
      <StyledFullButton
        onClick={() =>
          navigate(`/${PRIVATE_ROUTES.APP}/${PRIVATE_ROUTES.PREVIEW}`, {
            replace: true,
          })
        }
        disabled={products.length ? false : true}
      >
        Previsualizar
      </StyledFullButton>
    </LayoutOrderNoteAppButtons>
  );
};
export default OrderNoteAppButtons;
