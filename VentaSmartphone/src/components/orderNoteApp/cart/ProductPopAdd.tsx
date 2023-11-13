import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { StyledButton } from '../../styles/general/button.styles';
import BackButtonIcon from '../../general/BackButtonIcon';
import { yupResolver } from '@hookform/resolvers/yup/src/index.js';
import useOrderNote from '../../../store/orderNoteStore';
import productSchema from '../../../yup/ProductSchema';
import { nanoid } from 'nanoid';
import {
  LayoutAddProduct,
  LayoutEditPopAddProductsTextInput,
  LayoutProductPopAdd,
} from '../../styles/orderNoteApp/orderNoteAppCart.styles';
const ProductPopAdd = ({ closePop }: { closePop: any }) => {
  const addProduct = useOrderNote((state) => state.addProduct);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(productSchema),
  });
  const { errors } = formState;
  const onSubmit = (data: any) => {
    addProduct({
      id: nanoid(),
      name: data.name,
      price: data.price,
      quantity: data.quantity,
    });
    closePop(false);
  };
  return (
    <LayoutProductPopAdd>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LayoutAddProduct>
          <BackButtonIcon closePop={() => closePop(false)}></BackButtonIcon>
          <h3>Agregar producto</h3>
          <LayoutEditPopAddProductsTextInput>
            <p>Cantidad (unidades)</p>
            <TextField
              autoComplete="off"
              defaultValue={1}
              {...register('quantity')}
              type="number"
              error={!!errors.quantity}
              helperText={errors.quantity?.message}
            ></TextField>
            <p>Producto nombre</p>
            <TextField
              autoComplete="off"
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name?.message}
            ></TextField>
            <p>💲Precio </p>
            <TextField
              autoComplete="off"
              {...register('price')}
              inputProps={{
                step: 0.01,
              }}
              type="number"
              error={!!errors.price}
              helperText={errors.price?.message}
            ></TextField>
          </LayoutEditPopAddProductsTextInput>

          <StyledButton type="submit">Guardar</StyledButton>
        </LayoutAddProduct>
      </form>
    </LayoutProductPopAdd>
  );
};
export default ProductPopAdd;
