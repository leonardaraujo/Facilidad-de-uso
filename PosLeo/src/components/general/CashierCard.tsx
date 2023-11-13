import { LayoutCard } from '../style/resumeOrder/ResumeOrderCardStyles';
import cashierIcon from '../../assets/icons/cashier.png';
import { IconImage } from '../style/general/Image.styles';
import { Text } from '../style/general/Text.styles';
import { ICashierSaleNote } from '../../interfaces/Cashier.interface';
const CashierCard = ({ cashier }: { cashier: ICashierSaleNote }) => {
  return (
    <LayoutCard>
      <IconImage src={cashierIcon}></IconImage>
      <Text>Cajero</Text>
      <Text>
        {cashier.name.first} {cashier.name.sur}
      </Text>
    </LayoutCard>
  );
};
export default CashierCard;
