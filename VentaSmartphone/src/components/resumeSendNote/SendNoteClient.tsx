import useSendNote from "../../store/sendNoteStore";
import PreviewClientCard from "../preview/PreviewClientCard";
const SendNoteClient = () => {
  const client = useSendNote((state) => state.client);
  return (
    <PreviewClientCard dni={client.dni} name={client.name}></PreviewClientCard>
  );
};
export default SendNoteClient;
