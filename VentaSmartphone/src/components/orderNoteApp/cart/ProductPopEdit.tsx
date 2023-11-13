import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/src/index.js';
import { TextField } from '@mui/material';
import productSchema from '../../../yup/ProductSchema';
import { StyledButton } from '../../styles/general/button.styles';
import { IProductQuantity, IProductSchema } from '../../../interfaces/IProduct';
import useOrderNote from '../../../store/orderNoteStore';
import {
  LayoutEditPopAddProductsTextInput,
  LayoutEditProduct,
  LayoutEditProductButtons,
  LayoutProductPopEdit,
} from '../../styles/orderNoteApp/orderNoteAppCart.styles';
import BackButtonIcon from '../../general/BackButtonIcon';
const ProductPopEdit = ({
  closePop,
  product,
}: {
  closePop: any;
  product: IProductQuantity;
}) => {
  const { updateProduct, deleteProduct } = useOrderNote((state) => ({
    updateProduct: state.updateProduct,
    deleteProduct: state.deleteProduct,
  }));
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(productSchema),
  });
  const { errors } = formState;
  const onSubmit = (data: IProductSchema) => {
    updateProduct({
      id: product.id,
      name: data.name,
      price: data.price,
      quantity: data.quantity,
    });
    closePop(false);
  };
  return (
    <LayoutProductPopEdit>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LayoutEditProduct>
          <BackButtonIcon closePop={() => closePop(false)}></BackButtonIcon>
          <h3>Actualizar producto</h3>
          <LayoutEditPopAddProductsTextInput>
            <p>Cantidad (unidades)</p>
            <TextField
              autoComplete="off"
              defaultValue={product.quantity}
              {...register('quantity')}
              type="number"
              error={!!errors.quantity}
              helperText={errors.quantity?.message}
            ></TextField>
            <p>Producto nombre</p>
            <TextField
              autoComplete="off"
              {...register('name')}
              defaultValue={product.name}
              error={!!errors.name}
              helperText={errors.name?.message}
            ></TextField>
            <p>💲Precio</p>
            <TextField
              autoComplete="off"
              defaultValue={product.price}
              {...register('price')}
              inputProps={{
                step: 0.01,
              }}
              type="number"
              error={!!errors.price}
              helperText={errors.price?.message}
            ></TextField>
          </LayoutEditPopAddProductsTextInput>
          <LayoutEditProductButtons>
            <StyledButton
              type="button"
              onClick={() => {
                deleteProduct({ id: product.id });
                closePop(false);
              }}
              size="small"
              mode="danger"
            >
              Eliminar
            </StyledButton>
            <StyledButton type="submit">Actualizar</StyledButton>
          </LayoutEditProductButtons>
        </LayoutEditProduct>
      </form>
    </LayoutProductPopEdit>
  );
};
export default ProductPopEdit;
