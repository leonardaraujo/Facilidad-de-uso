import numeral from 'numeral';
import { IProductQuantity } from '../../interfaces/Product.interface';
import plusAll from '../../utils/plusAll';
import { FullButton } from '../style/general/Button.styles';
import { Text, Title } from '../style/general/Text.styles';
import {
  LayoutCartButtons,
  LayoutCart,
  LayoutTotalText,
} from '../style/resumeOrder/Cart.styles';
import TableCart from './TableCart';
import useResumeOrderStore from '../../store/resumeOrderStore';
import { fDeleteOrderNote } from '../../fetch/fOrderNote';
import { useEffect, useState } from 'react';
import useOrderNotesStore from '../../store/orderNotesStore';
import PayPop from './PayPop';
import Swal from 'sweetalert2';

const Cart = ({
  products,
  idOrderNote,
}: {
  products: Array<IProductQuantity>;
  idOrderNote: string;
}) => {
  const [isPaying, setIsPaying] = useState(false);
  useEffect(() => {
    return () => {
      deleteResumenOrderNote();
    };
  }, []);
  const deleteOrderNote = useOrderNotesStore((state) => state.deleteOrderNote);
  const deleteResumenOrderNote = useResumeOrderStore(
    (state) => state.deleteResumenOrderNote
  );
  return (
    <LayoutCart>
      {isPaying ? <PayPop closePop={setIsPaying}></PayPop> : <></>}
      <Title>Carrito</Title>
      <TableCart products={products}></TableCart>
      <LayoutTotalText>
        <Text size="large">TOTAL</Text>
        <Text size="large">S/{numeral(plusAll(products)).format('0.00')}</Text>
      </LayoutTotalText>
      <LayoutCartButtons>
        <FullButton
          btype="danger"
          onClick={() => {
            Swal.fire({
              title: '¿Eliminar nota de pedido?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: 'red',
              confirmButtonText: 'Eliminar',
              cancelButtonText: `Cancelar`,
              reverseButtons: true,
            }).then((result) => {
              if (result.isConfirmed) {
                fDeleteOrderNote(idOrderNote)
                  .then((data) => {
                    deleteResumenOrderNote();
                    deleteOrderNote(idOrderNote);
                    console.log(data);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            });
          }}
        >
          Eliminar
        </FullButton>
        <FullButton
          btype="success"
          onClick={() => {
            setIsPaying(true);
          }}
        >
          Finalizar venta
        </FullButton>
      </LayoutCartButtons>
    </LayoutCart>
  );
};
export default Cart;
