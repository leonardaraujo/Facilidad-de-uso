import TableRecord from '../components/record/TableRecord';
import { TitleStyled } from '../components/styles/general/text.styles';
import { LayoutRecord } from '../components/styles/record/record.layout';
import useOrderNotesRecordStore from '../store/orderNotesRecordStore';
const Record = () => {

  const orderNotes = useOrderNotesRecordStore((state) => state.orderNotes);
  return (
    <LayoutRecord>
      <TitleStyled>Historial de notas enviadas</TitleStyled>
      <TableRecord orderNotes={orderNotes}></TableRecord>
    </LayoutRecord>
  );
};
export default Record;
