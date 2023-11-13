import { LayoutNavbar } from '../style/sharedLayout/Navbar.styles';
import OrderNotesButton from './OrderNotesButton';
import SearchNotesButton from './SearchNotesButton';
const Navbar = () => {
  return (
    <LayoutNavbar>
      <OrderNotesButton></OrderNotesButton>
      <SearchNotesButton></SearchNotesButton>
    </LayoutNavbar>
  );
};
export default Navbar;
