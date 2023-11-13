import { IProductQuantity } from '../../interfaces/IProduct';
import Total from '../orderNoteApp/cart/Total';

import { LayoutPreviewCart } from '../styles/preview/PreviewClient.styles';
import CartTablePreview from './CartTablePreview';

const PreviewCart = ({ products }: { products: Array<IProductQuantity> }) => {
  return (
    <LayoutPreviewCart>
      <CartTablePreview products={products}></CartTablePreview>
      <Total products={products}></Total>
    </LayoutPreviewCart>
  );
};
export default PreviewCart;
