import { LayoutContainerOrderNotes } from '../style/orderNotes/OrderNotes.styles';
import CardOrderNote from './CardOrderNote';
import { useNavigate } from 'react-router-dom';
import IOrderNote from '../../interfaces/OrderNote.interface';
import useResumeOrderStore from '../../store/resumeOrderStore';
import PRIVATE_ROUTES from '../../constants/routes/PRIVATE_ROUTES';
import useOrderNotesStore from '../../store/orderNotesStore';

const ContainerOrderNotes = () => {

  const orderNotes = useOrderNotesStore((state) => state.orderNotes);
  const navigate = useNavigate();
  const { setResumenOrderNote } = useResumeOrderStore();
  return (
    <LayoutContainerOrderNotes>
      {orderNotes ? (
        orderNotes.map((orderNote: IOrderNote) => (
          <CardOrderNote
            onClick={() => {
              setResumenOrderNote(orderNote);
              navigate(
                `/${PRIVATE_ROUTES.APP}/${PRIVATE_ROUTES.RESUME_ORDER}`,
                {
                  replace: true,
                }
              );
            }}
            key={orderNote.id}
            colorcard={orderNote.seller.color.card}
            colortext={orderNote.seller.color.text}
            seller={orderNote.seller.name.first}
            client={orderNote.client.name}
            products={orderNote.products}
          ></CardOrderNote>
        ))
      ) : (
        <></>
      )}
    </LayoutContainerOrderNotes>
  );
};
export default ContainerOrderNotes;
