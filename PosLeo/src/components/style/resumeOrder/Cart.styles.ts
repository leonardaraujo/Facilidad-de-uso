import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const LayoutCart = styled.div`
  width: 95%;
  height: 95%;
  display: grid;
  padding: 5px;
  background-color: ${COLORS.DARK_BLUE};
  grid-template-rows: 10% 70% 10% 10%;
`;
export const LayoutCartButtons = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
`;
export const LayoutTableCart = styled.div`
  overflow: scroll;
  width: 100%;
  height: 427px;
`;
export const LayoutTotalText = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 50% 50%;
`;
export const LayoutPayPop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${COLORS.DARK_BLUE + 'cc'};
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
`;
