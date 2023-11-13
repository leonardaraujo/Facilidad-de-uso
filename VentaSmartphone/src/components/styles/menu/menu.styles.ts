import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const MenuLayout = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: ${COLORS.DARK_BLUE + 'FF'};
  z-index:10
`;
export const MenuLinksLayout = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  grid-template-rows: 10% 20%;
  grid-auto-rows: 20%;
`;
