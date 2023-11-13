import { IOrderNote } from '../../interfaces/IOrderNote';
import { IProductQuantity } from '../../interfaces/IProduct';
import totalQuantityPrice from '../../utils/totalQuantityPrice';
import { HiDocumentArrowUp } from 'react-icons/hi2';
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
} from '../styles/general/table.styles';
import numeral from 'numeral';
import { useNavigate } from 'react-router-dom';
import useOrderNote from '../../store/orderNoteStore';
import PRIVATE_ROUTES from '../../constants/routes/PRIVATE_ROUTES';
import Swal from 'sweetalert2';
import useSavedNotesStore from '../../store/savedNotesStore';
const TableSavedNotes = ({ savedNotes }: { savedNotes: Array<IOrderNote> }) => {
  const navigate = useNavigate();
  const { setClient, setAllProducts } = useOrderNote((state) => ({
    setClient: state.setClient,
    setAllProducts: state.setAllProducts,
  }));
  const deleteSavedNote = useSavedNotesStore((state) => state.deleteSavedNote);
  const getProductsString = (products: Array<IProductQuantity>) =>
    products
      .map((product) => product.name)
      .join()
      .substring(0, 200);
  return (
    <LayoutRecordHeadBody>
      <FullWithTableCollapse>
        <thead style={{ backgroundColor: 'black' }}>
          <tr style={{ height: '40px' }}>
            <th style={{ width: '10%' }}></th>
            <th style={{ width: '30%' }}>Cliente</th>
            <th style={{ width: '40%' }}>Productos</th>
            <th style={{ width: '20%' }}>Total</th>
          </tr>
        </thead>
      </FullWithTableCollapse>
      <ContainerTBodyRecord>
        <FullWithTable>
          <RecordTbody>
            {savedNotes
              .slice()
              .reverse()
              .map((savednote) => (
                <RecordTrBody
                  key={savednote.id}
                  onClick={() => {
                    Swal.fire({
                      title: '¿Utilizar nota guardada?',
                      showCancelButton: true,
                      text: 'Se eliminara esta nota guardada al utilizarla',
                      confirmButtonText: 'Utilizar nota',
                      confirmButtonColor:"orange",
                      cancelButtonText: `Cancelar`,
                      reverseButtons: true,
                    }).then((result) => {
                      if (result.isConfirmed) {
                        deleteSavedNote(savednote.id);
                        setClient(savednote.client);
                        setAllProducts(savednote.products);
                        navigate(
                          `/${PRIVATE_ROUTES.APP}/${PRIVATE_ROUTES.CREATE_ORDER_NOTE}`
                        );
                      }
                    });
                  }}
                >
                  <RecordTdIcon>
                    <HiDocumentArrowUp size={30}></HiDocumentArrowUp>
                  </RecordTdIcon>
                  <RecordTdName>
                    <p>{savednote.client.dni}</p>
                    <p>{savednote.client.name}</p>
                  </RecordTdName>
                  <RecordTdProducts>
                    {getProductsString(savednote.products)}
                  </RecordTdProducts>
                  <RecordTdQuantity>
                    S/
                    {numeral(
                      totalQuantityPrice(savednote.products).totalPrice
                    ).format('0.00')}
                  </RecordTdQuantity>
                </RecordTrBody>
              ))}
          </RecordTbody>
        </FullWithTable>
      </ContainerTBodyRecord>
    </LayoutRecordHeadBody>
  );
};
export default TableSavedNotes;
