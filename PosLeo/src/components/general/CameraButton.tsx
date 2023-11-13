import { IconButton } from '../style/general/Button.styles';
import { BsQrCodeScan } from 'react-icons/bs';
const CameraButton = ({ onClick }: { onClick: any }) => {
  return (
    <IconButton onClick={onClick}>
      <BsQrCodeScan size={40}></BsQrCodeScan>
    </IconButton>
  );
};
export default CameraButton;
