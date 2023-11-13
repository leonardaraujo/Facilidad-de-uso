import { IconTextButtonRelative } from '../../styles/general/button.styles';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { TextSmall } from '../../styles/general/text.styles';
const CreateClientButton = ({ openPop }: { openPop: any }) => {
  return (
    <div style={{ alignSelf: 'start', justifySelf: 'start' }}>
      <IconTextButtonRelative onClick={() => openPop(true)}>
        <AiOutlineUserAdd size={30}></AiOutlineUserAdd>
        <TextSmall>Añadir cliente</TextSmall>
      </IconTextButtonRelative>
    </div>
  );
};
export default CreateClientButton;
