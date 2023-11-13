import PreviewClientCard from './PreviewClientCard';
import useOrderNote from '../../store/orderNoteStore';
const PreviewClient = () => {
  const client = useOrderNote((state) => state.client);
  return (
    <PreviewClientCard dni={client.dni} name={client.name}></PreviewClientCard>
  );
};
export default PreviewClient;
