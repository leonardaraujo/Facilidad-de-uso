import { useState } from 'react';
import useClientStore from '../../../store/orderNoteStore';
import CreateClientButton from './CreateClientButton';
import { LayoutOrderNoteAppClient } from '../../styles/orderNoteApp/OrderNoteAppClient.styles';
import ClientCard from './ClientCard';
import ClientPopAdd from './ClientPopAdd';
import ClientPopEdit from './ClientPopEdit';
const OrderNoteAppClient = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { dni, name } = useClientStore((state) => state.client);
  return (
    <LayoutOrderNoteAppClient>
      {dni || name ? (
        <ClientCard dni={dni} name={name} editFunction={setIsEdit}></ClientCard>
      ) : (
        <CreateClientButton openPop={setIsAdd}></CreateClientButton>
      )}
      {isAdd ? <ClientPopAdd closePop={setIsAdd}></ClientPopAdd> : <></>}
      {isEdit ? <ClientPopEdit closePop={setIsEdit}></ClientPopEdit> : <></>}
      
    </LayoutOrderNoteAppClient>
  );
};
export default OrderNoteAppClient;
