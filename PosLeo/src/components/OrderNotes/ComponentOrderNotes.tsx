import { LayoutOrderNotes } from '../style/orderNotes/OrderNotes.styles';
import ContainerOrderNotes from './ContainerOrderNotes';
import TopOrderNotes from './TopOrderNotes';

const ComponentOrderNotes = () => {
  return (
    <LayoutOrderNotes>
      <TopOrderNotes></TopOrderNotes>
      <ContainerOrderNotes></ContainerOrderNotes>
    </LayoutOrderNotes>
  );
};
export default ComponentOrderNotes;
