import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const LayoutClientPopAdd = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${COLORS.DEEP_SEA + 80};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: grid;
  justify-items: center;
  align-items: center;
`;
export const LayoutClientPopEdit = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${COLORS.DEEP_SEA + 80};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: grid;
  justify-items: center;
  align-items: center;
`;
export const GridAddClientTextInput = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-rows: 15% 35% 15% 35%;
  padding: 10px;
`;
export const LayoutAddClient = styled.div`
  position: relative;
  height: 400px;
  width: 320px;
  background-color: ${COLORS.BLUE_PASTEL};
  display: grid;
  grid-template-rows: 20% 60% 20%;
  justify-items: center;
  align-items: center;
`;
export const GridAddClientButtons = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr 5fr;
  gap: 5px;
  padding: 10px;
  justify-items: center;
  align-items: center;
`;
