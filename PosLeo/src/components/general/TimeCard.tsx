import { Text } from '../style/general/Text.styles';
import { LayoutCard } from '../style/resumeOrder/ResumeOrderCardStyles';
import { BiSolidTimeFive } from 'react-icons/bi';
import dayjs from 'dayjs';
const TimeCard = ({ date }: { date: string }) => {
  return (
    <LayoutCard>
      <BiSolidTimeFive size={40} style={{ color: 'white' }}></BiSolidTimeFive>
      <Text>Fecha y hora </Text>
      <Text>{date ?`${dayjs(date).format('DD/MM/YYYY')} (${dayjs(date).format('HH:mm a')})`  : ''}</Text>
    </LayoutCard>
  );
};
export default TimeCard;
