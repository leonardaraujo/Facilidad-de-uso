import useOrderNote from '../../../store/orderNoteStore';
import BackButtonIcon from '../../general/BackButtonIcon';
import { TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup/src/yup.js';
import { useForm } from 'react-hook-form';
import yupClientSchema from '../../../yup/yupClientSchema';
import IClient from '../../../interfaces/IClient';
import {
  GridAddClientButtons,
  GridAddClientTextInput,
  LayoutAddClient,
  LayoutClientPopEdit,
} from '../../styles/orderNoteApp/ClientCard.styles';
import { StyledButton } from '../../styles/general/button.styles';

const ClientPopEdit = ({ closePop }: { closePop: any }) => {
  const { setClient, deleteClient } = useOrderNote((state) => ({
    setClient: state.setClient,
    deleteClient: state.deleteClient,
  }));
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(yupClientSchema),
  });
  const { errors } = formState;
  const client = useOrderNote((state) => state.client);
  const onSubmit = (data: IClient) => {
    setClient({
      dni: data.dni,
      name: data.name,
    });
    closePop(false);
  };
  const handleDelete = () => {
    deleteClient();
    closePop(false);
  };
  return (
    <LayoutClientPopEdit>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LayoutAddClient>
          <BackButtonIcon closePop={() => closePop(false)}></BackButtonIcon>
          <p>
            <b>Editar datos</b>
          </p>
          <GridAddClientTextInput>
            <p>Dni</p>
            <TextField
              autoComplete="off"
              {...register('dni')}
              defaultValue={client.dni}
              type="number"
              error={!!errors.dni}
              helperText={errors.dni?.message}
            ></TextField>
            <p>Nombre</p>
            <TextField
              autoComplete="off"
              defaultValue={client.name}
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name?.message}
            ></TextField>
          </GridAddClientTextInput>
          <GridAddClientButtons>
            <StyledButton
              type="button"
              size="small"
              onClick={handleDelete}
              mode="danger"
            >
              Eliminar
            </StyledButton>
            <StyledButton type="submit">Actualizar</StyledButton>
          </GridAddClientButtons>
        </LayoutAddClient>
      </form>
    </LayoutClientPopEdit>
  );
};
export default ClientPopEdit;
