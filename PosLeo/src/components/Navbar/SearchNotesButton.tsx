
import { BsSearch } from 'react-icons/bs';
import { Text } from '../style/general/Text.styles';
import { MyNavLink } from '../style/general/Navlink.styles';
const SearchNotesButton = () => {
  return (
    <MyNavLink to={'searchSale'}>
      <BsSearch size={45} style={{ color: 'white' }} />
      <Text size="large">Buscar compra</Text>
    </MyNavLink>
  );
};
export default SearchNotesButton;
