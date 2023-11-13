import { IconTextButton } from '../styles/general/button.styles';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Text } from '../styles/general/text.styles';
const BackButton = ({ onClick }: { onClick: any }) => {
  return (
    <IconTextButton onClick={onClick}>
      <IoIosArrowRoundBack size={30}></IoIosArrowRoundBack>
      <Text>Volver</Text>
    </IconTextButton>
  );
};
export default BackButton;
