import { IProductQuantity } from "../../interfaces/Product.interface";
import TableCart from "../ResumeOrder/TableCart";
import { LayoutSaleNoteCart } from "../style/SaleNote/CartSaleNote.styles";
import PrintButton from "./PrintButton";
import { Text, Title } from "../style/general/Text.styles";
import usePrinterStore from "../../store/printerStore";
import { writeData } from "../../utils/printerUtils";
import ISaleNote from "../../interfaces/SaleNote.interface";
import rawReceiptNotaPedido from "../../utils/rawReceiptNotaPedido";
import Swal from "sweetalert2";
import { LayoutTotalText } from "../style/resumeOrder/Cart.styles";
import numeral from "numeral";
import plusAll from "../../utils/plusAll";
const SaleNoteCart = ({
  products,
  saleNote,
}: {
  products: Array<IProductQuantity>;
  saleNote: ISaleNote;
}) => {
  const { toggleCharacteristic } = usePrinterStore((state) => ({
    toggleCharacteristic: state.toggleCharacteristic,
  }));
  return (
    <LayoutSaleNoteCart>
      <Title>Productos</Title>
      <TableCart products={products}></TableCart>
      <LayoutTotalText>
        <Text size="large">TOTAL</Text>
        <Text size="large">S/{numeral(plusAll(products)).format("0.00")}</Text>
      </LayoutTotalText>
      <PrintButton
        onClick={() => {
          Swal.fire({
            title: "¿Imprimir documento?",
            showCancelButton: true,
            confirmButtonText: "Imprimir",
            cancelButtonText: `Volver`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              writeData(
                rawReceiptNotaPedido(
                  saleNote.products,
                  saleNote.client,
                  saleNote.date,
                  saleNote.id,
                  saleNote.seller,
                  saleNote.bagId
                ),
                toggleCharacteristic
              );
            }
          });
        }}
      ></PrintButton>
    </LayoutSaleNoteCart>
  );
};
export default SaleNoteCart;
