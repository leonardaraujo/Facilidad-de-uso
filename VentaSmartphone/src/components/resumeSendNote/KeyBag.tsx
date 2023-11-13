import { YellowBox } from "../styles/ResumeSendNote/ResumeSendNote.styles";
import { TextCode } from "../styles/general/text.styles";
const KeyBag = ({ id }: { id: string }) => {
  return (
    <YellowBox>
      <TextCode>{id}</TextCode>
    </YellowBox>
  );
};
export default KeyBag;
