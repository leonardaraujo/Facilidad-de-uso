import TableSavedNotes from '../components/savedNotes/TableSavedNotes';
import { TitleStyled } from '../components/styles/general/text.styles';
import { LayoutRecord } from '../components/styles/record/record.layout';
import useSavedNotesStore from '../store/savedNotesStore';
const SavedNotes = () => {
  const savedNotes = useSavedNotesStore((state) => state.savedNotes);
  return (
    <LayoutRecord>
      <TitleStyled>Notas de venta guardadas</TitleStyled>
      <TableSavedNotes savedNotes={savedNotes}></TableSavedNotes>
    </LayoutRecord>
  );
};
export default SavedNotes;
