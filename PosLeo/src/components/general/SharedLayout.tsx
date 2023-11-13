import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { ContainerSharedLayout } from '../style/sharedLayout/SharedLayout.styles';
import PrinterNotFoundButton from './PrinterNotFoundButton';
const SharedLayout = () => {
  return (
    <ContainerSharedLayout>
      <PrinterNotFoundButton></PrinterNotFoundButton>
      <Outlet />
      <Navbar></Navbar>
    </ContainerSharedLayout>
  );
};
export default SharedLayout;
