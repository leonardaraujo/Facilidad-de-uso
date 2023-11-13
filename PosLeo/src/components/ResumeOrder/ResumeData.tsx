import IClient from "../../interfaces/Client.interface";
import ISeller from "../../interfaces/Seller.interface";
import BackButton from "../general/BackButton";
import BagCodeCard from "../general/BagCodeCard";
import { Title } from "../style/general/Text.styles";
import {
  LayoutResumeData,
  LayoutResumeDataCards,
} from "../style/resumeOrder/ResumeOrder.styles";
import ClientCard from "./ClientCard";
import SellerCard from "./SellerCard";
import { useNavigate } from "react-router-dom";
const ResumeData = ({
  client,
  seller,
  bagId,
}: {
  client: IClient;
  seller: ISeller;
  bagId: string;
}) => {
  const navigate = useNavigate();
  return (
    <LayoutResumeData>
      <Title>Resumen de compra</Title>
      <LayoutResumeDataCards>
        <SellerCard seller={seller}></SellerCard>
        <ClientCard client={client}></ClientCard>
        <BagCodeCard code={bagId}></BagCodeCard>
      </LayoutResumeDataCards>
      <BackButton onClick={() => navigate("/app")}></BackButton>
    </LayoutResumeData>
  );
};
export default ResumeData;
