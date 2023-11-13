import { LayoutCard } from '../style/resumeOrder/ResumeOrderCardStyles';
import { BsCreditCard2Back, BsCashStack } from 'react-icons/bs';
import { FaPeopleArrows } from 'react-icons/fa';
import { LiaWalletSolid } from 'react-icons/lia';
import { Text } from '../style/general/Text.styles';
import numeral from 'numeral';
const PaymentTypeCard = ({
  paymentType,
  paidWith,
}: {
  paymentType: { id: string; name: string };
  paidWith: number;
}) => {
  return (
    <LayoutCard>
      <div style={{ backgroundColor: 'transparent' }}>
        {paymentType.id == '1' ? <BsCashStack size={40}></BsCashStack> : <></>}
        {paymentType.id == '2' ? (
          <FaPeopleArrows size={40}></FaPeopleArrows>
        ) : (
          <></>
        )}
        {paymentType.id == '3' ? (
          <BsCreditCard2Back size={40}></BsCreditCard2Back>
        ) : (
          <></>
        )}
        {paymentType.id == '4' ? (
          <LiaWalletSolid size={40}></LiaWalletSolid>
        ) : (
          <></>
        )}
      </div>
      <Text>Tipo de pago</Text>
      <Text>
        {paymentType.name}
        {paidWith ? ` y pago con: S/${numeral(paidWith).format('0.00')}` : ''}
      </Text>
    </LayoutCard>
  );
};
export default PaymentTypeCard;
