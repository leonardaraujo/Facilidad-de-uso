import { TbArrowBack } from 'react-icons/tb';
import { AbsoluteBackButton } from '../style/general/Button.styles';
const BackButton = ({
  onClick,
  disabled,
}: {
  onClick: any;
  disabled?: any;
}) => {
  return (
    <AbsoluteBackButton onClick={onClick} disabled={disabled}>
      <TbArrowBack size={30}></TbArrowBack>
    </AbsoluteBackButton>
  );
};
export default BackButton;
