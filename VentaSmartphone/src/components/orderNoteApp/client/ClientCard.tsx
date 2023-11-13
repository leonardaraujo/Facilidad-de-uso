import { BiSolidUserCircle } from 'react-icons/bi';
import EditButton from './EditButton';
import { LayoutTextClient } from '../../styles/orderNoteApp/OrderNoteAppClient.styles';
import { LayoutClientCard } from '../../styles/orderNoteApp/OrderNoteAppClient.styles';
import IClient from '../../../interfaces/IClient';
interface propsClientCard extends IClient {
  editFunction: any;
}
const ClientCard = ({ editFunction, dni, name }: propsClientCard) => {
  return (
    <LayoutClientCard>
      <BiSolidUserCircle size={45}></BiSolidUserCircle>
      <LayoutTextClient>
        <p>
          <b>Dni:{dni}</b>
        </p>
        <p>
          <b>Nombre:</b>{name}
        </p>
      </LayoutTextClient>
      <EditButton onClick={() => editFunction(true)}></EditButton>
    </LayoutClientCard>
  );
};
export default ClientCard;
