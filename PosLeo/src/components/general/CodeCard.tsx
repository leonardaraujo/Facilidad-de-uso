import { Text } from '../style/general/Text.styles';
import { LayoutCard } from '../style/resumeOrder/ResumeOrderCardStyles';
import { FcKey } from 'react-icons/fc';
const CodeCard = ({ id }: { id: string }) => {
  return (
    <LayoutCard>
      <FcKey size={40}></FcKey>
      <Text> Código</Text>
      <Text>{id}</Text>
    </LayoutCard>
  );
};
export default CodeCard;
