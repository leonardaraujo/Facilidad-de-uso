import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const LayoutQrScanner = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  background-color: ${COLORS.DARK_BLUE + 'CC'};
`;
export const LayoutQrScannerTitleFrame = styled.div`
  position: relative;
  height: 600px;
  width: 600px;
  padding: 10px;
  display: grid;
  grid-template-rows: 20% 80%;
  justify-items: center;
  align-items: center;
  background-color: ${COLORS.BLUE_PASTEL};
`;
