import sellerIcon from '../../assets/icons/seller.png';
import { ISellerSaleNote } from '../../interfaces/Seller.interface';
import { IconImage } from '../style/general/Image.styles';
import { Text } from '../style/general/Text.styles';
import { LayoutCard } from '../style/resumeOrder/ResumeOrderCardStyles';
const SellerCard = ({ seller }: { seller: ISellerSaleNote }) => {
  return (
    <LayoutCard>
      <IconImage src={sellerIcon}></IconImage>
      <Text>Vendedor@</Text>
      <Text>
        {seller.name.first} {seller.name.sur}
      </Text>
    </LayoutCard>
  );
};
export default SellerCard;
