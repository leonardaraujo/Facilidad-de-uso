import { Text } from '../style/general/Text.styles';
import { LayoutCard } from '../style/resumeOrder/ResumeOrderCardStyles';
import { LiaExchangeAltSolid } from 'react-icons/lia';
import dayjs from 'dayjs';
const ChangeCard = ({
  change,
}: {
  change: { state: boolean; date: string };
}) => {
  return (
    <LayoutCard>
      <LiaExchangeAltSolid size={40}></LiaExchangeAltSolid>
      <Text>Realizo cambio:</Text>
      {change?.state ? (
        <Text $color="red">
          Si,el {dayjs(change?.date).format('DD/MM/YYYY')}{`(${dayjs(change?.date).format('HH:mm a')})`}
        </Text>
      ) : (
        <Text>No</Text>
      )}
    </LayoutCard>
  );
};
export default ChangeCard;
