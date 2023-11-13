import KeyBag from "../components/resumeSendNote/KeyBag";
import { LayoutResumeSendNote } from "../components/styles/ResumeSendNote/ResumeSendNote.layout";
import {
  GrayBox,
  LayoutClientCart,
  LayoutCodeBag,
  RedBox,
} from "../components/styles/ResumeSendNote/ResumeSendNote.styles";
import { Text, TitleStyled } from "../components/styles/general/text.styles";
import { useNavigate } from "react-router-dom";
import PreviewCart from "../components/preview/PreviewCart";
import { StyledFullButton } from "../components/styles/general/button.styles";
import useSendNote from "../store/sendNoteStore";
import PRIVATE_ROUTES from "../constants/routes/PRIVATE_ROUTES";
import SendNoteClient from "../components/resumeSendNote/SendNoteClient";
const ResumeSendNote = () => {
  const products = useSendNote((state) => state.products);
  const bagId = useSendNote((state) => state.bagId);
  const navigate = useNavigate();
  if (!bagId) {
    navigate(`/${PRIVATE_ROUTES.APP}/${PRIVATE_ROUTES.CREATE_ORDER_NOTE}`);
  }
  return (
    <LayoutResumeSendNote>
      <TitleStyled>Resumen de nota enviada</TitleStyled>
      <LayoutCodeBag>
        <GrayBox>
          <Text>Codigo de bolsa</Text>
        </GrayBox>
        <KeyBag id={bagId}></KeyBag>
        <RedBox>
          <Text>Si rehaces la venta quita el código anterior </Text>
        </RedBox>
      </LayoutCodeBag>
      <LayoutClientCart>
        <SendNoteClient></SendNoteClient>
        <PreviewCart products={products}></PreviewCart>
      </LayoutClientCart>

      <StyledFullButton
        onClick={() => {
          navigate(-1);
        }}
      >
        Volver
      </StyledFullButton>
    </LayoutResumeSendNote>
  );
};

export default ResumeSendNote;
