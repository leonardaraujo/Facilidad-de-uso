import PRIVATE_ROUTES from '../../constants/routes/PRIVATE_ROUTES';
import BackButton from '../general/BackButton';
import { MyLink } from '../styles/general/link.styles';
import { Text } from '../styles/general/text.styles';
import { MenuLayout, MenuLinksLayout } from '../styles/menu/menu.styles';
import MenuButton from './MenuButton';
import { useState } from 'react';
import { TfiWrite } from 'react-icons/tfi';
import { GrHistory } from 'react-icons/gr';
import { AiOutlineSave } from 'react-icons/ai';
import useSavedNotesStore from '../../store/savedNotesStore';
const Menu = () => {
  const savedNotes = useSavedNotesStore((state) => state.savedNotes);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <MenuButton
        onClick={() => {
          setMenu(true);
        }}
      ></MenuButton>
      {menu ? (
        <MenuLayout>
          <MenuLinksLayout>
            <BackButton
              onClick={() => {
                setMenu(false);
              }}
            ></BackButton>
            <div></div>
            <MyLink
              onClick={() => {
                setMenu(false);
              }}
              to={`/${PRIVATE_ROUTES.APP}/${PRIVATE_ROUTES.CREATE_ORDER_NOTE}`}
              replace={true}
            >
              <TfiWrite size={30}></TfiWrite>
              <Text>Crear nota de venta</Text>
            </MyLink>
            <MyLink
              onClick={() => {
                setMenu(false);
              }}
              to={`/${PRIVATE_ROUTES.APP}/${PRIVATE_ROUTES.SAVED_NOTES}`}
            >
              <AiOutlineSave
                size={40}
                style={{ color: 'orange' }}
              ></AiOutlineSave>
              <Text>Notas de venta guardadas ({savedNotes.length})</Text>
            </MyLink>
            <MyLink
              onClick={() => {
                setMenu(false);
              }}
              to={`/${PRIVATE_ROUTES.APP}/${PRIVATE_ROUTES.RECORD_ORDER_NOTES}`}
            >
              <GrHistory size={35}></GrHistory>
              <Text>Historial de notas enviadas</Text>
            </MyLink>
          </MenuLinksLayout>
        </MenuLayout>
      ) : (
        <></>
      )}
    </>
  );
};
export default Menu;
