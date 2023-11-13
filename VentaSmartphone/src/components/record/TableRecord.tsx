import { IOrderNote } from "../../interfaces/IOrderNote";
import { IProductQuantity } from "../../interfaces/IProduct";
import totalQuantityPrice from "../../utils/totalQuantityPrice";
import { AiOutlineCopy } from "react-icons/ai";
import {
  ContainerTBodyRecord,
  FullWithTable,
  FullWithTableCollapse,
  LayoutRecordHeadBody,
  RecordTbody,
  RecordTdIcon,
  RecordTdName,
  RecordTdProducts,
  RecordTdQuantity,
  RecordTrBody,
} from "../styles/general/table.styles";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";
import useOrderNote from "../../store/orderNoteStore";
import PRIVATE_ROUTES from "../../constants/routes/PRIVATE_ROUTES";
import { AiOutlineEye } from "react-icons/ai";
import Swal from "sweetalert2";
import useSendNote from "../../store/sendNoteStore";
const TableRecord = ({ orderNotes }: { orderNotes: Array<IOrderNote> }) => {
  const navigate = useNavigate();
  const { setClient, setAllProducts } = useOrderNote((state) => ({
    setClient: state.setClient,
    setAllProducts: state.setAllProducts,
  }));
  const {
    setClient: setClientSend,
    setAllProducts: setAllProductsSend,
    setBagId,
  } = useSendNote((state) => ({
    setClient: state.setClient,
    setAllProducts: state.setAllProducts,
    setBagId: state.setBagId,
  }));
  const getProductsString = (products: Array<IProductQuantity>) =>
    products
      .map((product) => product.name)
      .join()
      .substring(0, 200);
  return (
    <LayoutRecordHeadBody>
      <FullWithTableCollapse>
        <thead style={{ backgroundColor: "black" }}>
          <tr style={{ height: "40px" }}>
            <th style={{ width: "10%" }}></th>
            <th style={{ width: "20%" }}>Cliente</th>
            <th style={{ width: "40%" }}>Productos</th>
            <th style={{ width: "20%" }}>Total</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
      </FullWithTableCollapse>
      <ContainerTBodyRecord>
        <FullWithTable>
          <RecordTbody>
            {orderNotes
              .slice()
              .reverse()
              .map((ordernote) => (
                <RecordTrBody key={ordernote.id}>
                  <RecordTdIcon
                    onClick={() => {
                      setBagId(ordernote.bagId);
                      setAllProductsSend(ordernote.products);
                      setClientSend(ordernote.client);
                      navigate(
                        `/${PRIVATE_ROUTES.APP}/${PRIVATE_ROUTES.RESUME_SEND}`
                      );
                    }}
                  >
                    <AiOutlineEye size={30} />
                  </RecordTdIcon>
                  <RecordTdName>
                    <p>{ordernote.client.dni}</p>
                    <p>{ordernote.client.name}</p>
                  </RecordTdName>
                  <RecordTdProducts>
                    {getProductsString(ordernote.products)}
                  </RecordTdProducts>
                  <RecordTdQuantity>
                    S/
                    {numeral(
                      totalQuantityPrice(ordernote.products).totalPrice
                    ).format("0.00")}
                  </RecordTdQuantity>
                  <RecordTdIcon
                    onClick={() => {
                      Swal.fire({
                        title: "¿Copiar nota de pedido?",
                        showCancelButton: true,
                        confirmButtonText: "Copiar",
                        cancelButtonText: `Cancelar`,
                        reverseButtons: true,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          setClient(ordernote.client);
                          setAllProducts(ordernote.products);
                          navigate(
                            `/${PRIVATE_ROUTES.APP}/${PRIVATE_ROUTES.CREATE_ORDER_NOTE}`
                          );
                        }
                      });
                    }}
                  >
                    <AiOutlineCopy size={30}></AiOutlineCopy>
                  </RecordTdIcon>
                </RecordTrBody>
              ))}
          </RecordTbody>
        </FullWithTable>
      </ContainerTBodyRecord>
    </LayoutRecordHeadBody>
  );
};
export default TableRecord;
