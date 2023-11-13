import { BiSolidUserCircle } from 'react-icons/bi';
import {
  LayoutPreviewCardText,
  LayoutPreviewClientCard,
} from '../styles/preview/PreviewClient.styles';
import IClient from '../../interfaces/IClient';
import { Text } from '../styles/general/text.styles';

const PreviewClientCard = ({ dni, name }: IClient) => {
  return dni || name ? (
    <LayoutPreviewClientCard>
      <BiSolidUserCircle size={45}></BiSolidUserCircle>
      <LayoutPreviewCardText>
        <p>
          <b>Dni:</b> {dni}
        </p>
        <p>
          <b>Nombre:</b>{name}
        </p>
      </LayoutPreviewCardText>
    </LayoutPreviewClientCard>
  ) : (
    <Text>No hay cliente</Text>
  );
};
export default PreviewClientCard;
