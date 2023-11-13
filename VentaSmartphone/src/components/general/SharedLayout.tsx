import { Outlet } from 'react-router-dom';
import { ContainerSharedLayout } from '../styles/sharedLayout/SharedLayout';
import Menu from '../menu/Menu';
const SharedLayout = () => {
  return (
    <ContainerSharedLayout>
      <Menu></Menu>
      <Outlet></Outlet>
    </ContainerSharedLayout>
  );
};
export default SharedLayout;
