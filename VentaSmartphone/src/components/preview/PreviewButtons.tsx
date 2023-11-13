import { StyledFullButton } from "../styles/general/button.styles";
import { LayoutPreviewButtons } from "../styles/preview/PreviewClient.styles";
import { useNavigate } from "react-router-dom";
import PRIVATE_ROUTES from "../../constants/routes/PRIVATE_ROUTES";
import { useState } from "react";
import { fAddOrderNote } from "../../fetch/fOrderNotes";
import useOrderNote from "../../store/orderNoteStore";
import Swal from "sweetalert2";
import { nanoid } from "nanoid";
import useOrderNotesRecordStore from "../../store/orderNotesRecordStore";
import nanoIdBag from "../../utils/nanoIdBag";
import useSendNote from "../../store/sendNoteStore";
import useSocketStore from "../../store/socketStore";
const PreviewButtons = () => {
  const socket = useSocketStore((state) => state.socket);
  const {
    setBagId: setBagSendedId,
    setClient,
    setAllProducts,
    setSeller,
  } = useSendNote((state) => ({
    setBagId: state.setBagId,
    setClient: state.setClient,
    setAllProducts: state.setAllProducts,
    setSeller: state.setSeller,
  }));
  const { deleteClient, deleteAllProducts } = useOrderNote((state) => ({
    deleteClient: state.deleteClient,
    deleteAllProducts: state.deleteAllProducts,
  }));
  const addOrderNoteToHistory = useOrderNotesRecordStore(
    (state) => state.addOrderNoteToHistory
  );
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();
  const setBagId = useOrderNote((state) => state.setBagId);
  const { seller, client, products } = useOrderNote((state) => ({
    seller: state.seller,
    client: state.client,
    products: state.products,
  }));
  return (
    <LayoutPreviewButtons>
      <StyledFullButton
        size="small"
        onClick={() =>
          navigate(`/${PRIVATE_ROUTES.APP}/${PRIVATE_ROUTES.CREATE_ORDER_NOTE}`)
        }
      >
        Volver
      </StyledFullButton>
      <StyledFullButton
        disabled={isSending}
        mode="success"
        onClick={() => {
          setIsSending(true);
          const bagId = nanoIdBag();
          setBagId(bagId);
          fAddOrderNote({ seller, client, products, bagId })
            .then(() => {
              deleteClient();
              deleteAllProducts();
              //usando el store de nota enviada
              setBagSendedId(bagId);
              setClient(client);
              setAllProducts(products);
              setSeller(seller);
              //termino
              addOrderNoteToHistory({
                id: nanoid(),
                seller,
                client,
                products,
                bagId,
              });
              Swal.fire({
                icon: "success",
                title: "Nota de venta enviada",
                showConfirmButton: false,
                timer: 750,
                allowOutsideClick: false,
              }).then(() => {
                if (socket) {
                  socket.emit("newOrderSeller");
                }
                navigate(
                  `/${PRIVATE_ROUTES.APP}/${PRIVATE_ROUTES.RESUME_SEND}`
                );
              });
            })
            .catch(() => {
              Swal.fire({
                icon: "error",
                title: "Ocurrió un error al enviar la nota",
                showConfirmButton: false,
                timer: 1500,
                allowOutsideClick: false,
              });
              setIsSending(false);
            });
        }}
      >
        Enviar nota de pedido
      </StyledFullButton>
    </LayoutPreviewButtons>
  );
};
export default PreviewButtons;
