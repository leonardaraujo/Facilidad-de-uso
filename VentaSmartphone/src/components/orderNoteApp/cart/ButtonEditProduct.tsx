import { BiEditAlt } from 'react-icons/bi';
import { IconButtonRelative } from '../../styles/general/button.styles';
const ButtonEditProduct = ({ onClick }: { onClick: any }) => {
  return (
    <IconButtonRelative onClick={onClick}>
      <BiEditAlt size={30}></BiEditAlt>
    </IconButtonRelative>
  );
};
export default ButtonEditProduct;
