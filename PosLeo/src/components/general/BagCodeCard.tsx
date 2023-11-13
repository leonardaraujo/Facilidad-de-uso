import { LayoutCard } from "../style/resumeOrder/ResumeOrderCardStyles";
import { Text } from "../style/general/Text.styles";
import { HiOutlineShoppingBag } from "react-icons/hi";
const BagCodeCard = ({ code }: { code: string }) => {
  return (
    <LayoutCard>
      <HiOutlineShoppingBag size={40}></HiOutlineShoppingBag>
      <Text>Código bolsa</Text>
      <Text>{code}</Text>
    </LayoutCard>
  );
};
export default BagCodeCard;
