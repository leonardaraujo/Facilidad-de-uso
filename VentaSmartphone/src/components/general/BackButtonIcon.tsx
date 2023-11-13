import { IconButton } from '../styles/general/button.styles';
import { IoIosArrowRoundBack } from 'react-icons/io';
const BackButtonIcon = ({ closePop }: { closePop: any }) => {
  return (
    <IconButton type="button" onClick={closePop}>
      <IoIosArrowRoundBack size={25}></IoIosArrowRoundBack>
    </IconButton>
  );
};
export default BackButtonIcon;
