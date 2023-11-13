import { FaUserCircle } from 'react-icons/fa';
import { LayoutCard } from '../style/resumeOrder/ResumeOrderCardStyles';
import { Text } from '../style/general/Text.styles';
import IClient from '../../interfaces/Client.interface';
const ClientCard = ({ client }: { client: IClient }) => {
  return (
    <LayoutCard>
      <FaUserCircle size={40}></FaUserCircle>
      <Text>Cliente</Text>
      <div>
        {client.dni ? <Text>Dni: {client.dni}</Text> : <></>}
        {client.name ? <Text>Nombre: {client.name}</Text> : <></>}
      </div>
    </LayoutCard>
  );
};
export default ClientCard;
