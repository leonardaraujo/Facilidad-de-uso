import { IconButtonFull } from '../style/general/Button.styles';
import { AiOutlinePrinter } from 'react-icons/ai';
import { Text } from '../style/general/Text.styles';
const PrintButton = ({ onClick }: { onClick: any }) => {
  return (
    <IconButtonFull onClick={onClick}>
      <AiOutlinePrinter size={40} />
      <Text>Imprimir recibo</Text>
    </IconButtonFull>
  );
};
export default PrintButton;
