import { AiOutlineMenu } from 'react-icons/ai';
import { IconButton } from '../styles/general/button.styles';
const MenuButton = ({ onClick }: { onClick: any }) => {
  return (
    <IconButton onClick={onClick}>
      <AiOutlineMenu style={{ color: 'white' }} size={40}></AiOutlineMenu>
    </IconButton>
  );
};
export default MenuButton;
