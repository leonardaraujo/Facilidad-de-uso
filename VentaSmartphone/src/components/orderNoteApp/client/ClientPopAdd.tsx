import useOrderNote from '../../../store/orderNoteStore';

import { TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import yupClientSchema from '../../../yup/yupClientSchema';
import BackButtonIcon from '../../general/BackButtonIcon';
import {
  GridAddClientTextInput,
  LayoutAddClient,
  LayoutClientPopAdd,
} from '../../styles/orderNoteApp/ClientCard.styles';
import IClient from '../../../interfaces/IClient';
import { StyledButton } from '../../styles/general/button.styles';
import { Text } from '../../styles/general/text.styles';
const ClientPopAdd = ({ closePop }: { closePop: any }) => {
  const { register, handleSubmit, formState } = useForm<IClient>({
    resolver: yupResolver(yupClientSchema),
  });
  const { errors } = formState;
  const setClient = useOrderNote((state) => state.setClient);
  const onSubmit = (data: IClient) => {
    console.log(data);
    setClient({
      dni: data.dni,
      name: data.name,
    });
    closePop(false);
  };
  return (
    <LayoutClientPopAdd>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LayoutAddClient>
          <BackButtonIcon closePop={() => closePop(false)}></BackButtonIcon>
          <Text>
            <b>Agregar cliente</b>
          </Text>
          <GridAddClientTextInput>
            <Text>Nombre</Text>
            <TextField
              autoComplete="off"
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name?.message}
            ></TextField>
            <Text>Dni</Text>
            <TextField
              autoComplete="off"
              {...register('dni')}
              type="number"
              error={!!errors.dni}
              helperText={errors.dni?.message}
            ></TextField>
          </GridAddClientTextInput>
          <StyledButton type="submit">Guardar</StyledButton>
        </LayoutAddClient>
      </form>
    </LayoutClientPopAdd>
  );
};
export default ClientPopAdd;
