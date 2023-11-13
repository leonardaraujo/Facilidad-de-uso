import { IProductQuantity } from '../../interfaces/Product.interface';
import { TextInherit } from '../style/general/Text.styles';
import { LayoutCardOrderNote } from '../style/orderNotes/OrderNotes.styles';
import numeral from 'numeral';
interface ICardOrderNote {
  seller: string;
  client: string;
  products: Array<IProductQuantity>;
  colorcard: string;
  colortext: string;
  onClick: any;
}

const CardOrderNote = ({
  seller,
  client,
  products,
  colorcard,
  colortext,
  onClick,
}: ICardOrderNote) => {
  let nameProducts;
  let total;
  let totalDummy = 0;
  nameProducts = products
    .map((product) => product.name)
    .join()
    .substring(0, 200);
  products.forEach(
    (product) => (totalDummy += product.quantity * product.price)
  );
  total = numeral(totalDummy).format('0.00');

  return (
    <LayoutCardOrderNote
      onClick={onClick}
      $colorcard={colorcard}
      $colortext={colortext}
    >
      <TextInherit>{seller}</TextInherit>
      <TextInherit>{client}</TextInherit>
      <TextInherit>{nameProducts}</TextInherit>
      <TextInherit>S/{total}</TextInherit>
    </LayoutCardOrderNote>
  );
};
export default CardOrderNote;
