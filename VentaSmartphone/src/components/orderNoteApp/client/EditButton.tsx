import { IconButtonRelative } from '../../styles/general/button.styles';
import { AiOutlineEdit } from 'react-icons/ai';
const EditButton = ({ onClick }: { onClick: any }) => {
  return (
    <IconButtonRelative onClick={onClick}>
      <AiOutlineEdit size={40}></AiOutlineEdit>
    </IconButtonRelative>
  );
};
export default EditButton;
