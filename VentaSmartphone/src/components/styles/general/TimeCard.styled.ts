import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const LayoutTimeCard = styled.div`
  display: grid;
  height: 90%;
  width: 95%;
  align-items: center;
  justify-items: center;
  padding: 1px;
  gap: 2px;
  grid-template-columns: 1fr 4fr;
  background-color: ${COLORS.DARK_BLUE};
`;
export const LayoutTimeCardText = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-items: start;
  gap: 2px;
  grid-template-rows: 1fr 1fr;
`;
