import { GrUpdate } from 'react-icons/gr';
import { UpdateButtonAbsolute } from '../style/general/Button.styles';
import useOrderNotesStore from '../../store/orderNotesStore';
import { fGetOrderNotes } from '../../fetch/fOrderNote';
const UpdateButton = () => {
  const setAllOrderNotes = useOrderNotesStore(
    (state) => state.setAllOrderNotes
  );
  return (
    <UpdateButtonAbsolute
      onClick={() => {
        fGetOrderNotes()
          .then((respond) => {
            console.log('fectching again notes');
            setAllOrderNotes(respond.data);
            console.log();
          })
          .catch((err) => console.log(err));
      }}
    >
      <GrUpdate size={35}></GrUpdate>
    </UpdateButtonAbsolute>
  );
};
export default UpdateButton;
