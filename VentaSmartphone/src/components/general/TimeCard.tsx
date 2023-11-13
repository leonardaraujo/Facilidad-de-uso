import { BiTimeFive } from 'react-icons/bi';
import {
  LayoutTimeCard,
  LayoutTimeCardText,
} from '../styles/general/TimeCard.styled';
const TimeCard = ({ date, time }: { date: string; time: string }) => {
  return (
    <LayoutTimeCard>
      <BiTimeFive size={45}></BiTimeFive>
      <LayoutTimeCardText>
        <p>Fecha: {date}</p>
        <p>Hora: {time}</p>
      </LayoutTimeCardText>
    </LayoutTimeCard>
  );
};
export default TimeCard;
