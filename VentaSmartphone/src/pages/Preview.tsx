import { Navigate } from 'react-router-dom';
import PRIVATE_ROUTES from '../constants/routes/PRIVATE_ROUTES';
import useOrderNote from '../store/orderNoteStore';
import { LayoutPreview } from '../components/styles/preview/Preview.layout';
import { TitleStyled } from '../components/styles/general/text.styles';
import PreviewClient from '../components/preview/PreviewClient';
import PreviewCart from '../components/preview/PreviewCart';
import PreviewButtons from '../components/preview/PreviewButtons';
const Preview = () => {
  const products = useOrderNote((state) => state.products);
  return products.length ? (
    <LayoutPreview>
      <TitleStyled>Previsualización</TitleStyled>
      <PreviewClient></PreviewClient>
      <PreviewCart products={products}></PreviewCart>
      <PreviewButtons></PreviewButtons>
    </LayoutPreview>
  ) : (
    <Navigate to={`/${PRIVATE_ROUTES.APP}`} replace={true} />
  );
};
export default Preview;
