import { AiOutlineSave } from 'react-icons/ai';
import { IconButtonSave } from '../../styles/general/button.styles';
import useOrderNote from '../../../store/orderNoteStore';
import Swal from 'sweetalert2';
import useSavedNotesStore from '../../../store/savedNotesStore';
import { nanoid } from 'nanoid';
const SaveNoteForLateButton = () => {
  const { seller, client, products } = useOrderNote((state) => ({
    seller: state.seller,
    client: state.client,
    products: state.products,
  }));
  const addOrderNoteToSave = useSavedNotesStore(
    (state) => state.addOrderNoteToSave
  );
  const { deleteAllProducts, deleteClient } = useOrderNote((state) => ({
    deleteAllProducts: state.deleteAllProducts,
    deleteClient: state.deleteClient,
  }));
  return (
    <IconButtonSave
      disabled={products.length || client.dni || client.name ? false : true}
      onClick={() => {
        Swal.fire({
          title: '¿Guardar nota de venta para después?',
          showCancelButton: true,
          confirmButtonText: 'Guardar',
          confirmButtonColor: 'orange',
          cancelButtonText: `Volver`,

          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            addOrderNoteToSave({ id: nanoid(), seller, client, products });
            deleteAllProducts();
            deleteClient();
          }
        });
      }}
    >
      <AiOutlineSave size={40}></AiOutlineSave>
    </IconButtonSave>
  );
};
export default SaveNoteForLateButton;
