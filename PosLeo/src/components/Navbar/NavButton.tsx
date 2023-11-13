
import { BiTimer } from 'react-icons/bi';
import { Text } from '../style/general/Text.styles';
import { MyNavLink } from '../style/general/Navlink.styles';
const NavButton = () => {
  return (
    <MyNavLink to={'searchSale'}>
      <BiTimer size={60} style={{ color: 'white' }} />
      <Text size="large">Notas de pedido</Text>
    </MyNavLink>
  );
};
export default NavButton;
