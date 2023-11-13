import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const LayoutSaleNoteResumeData = styled.div`
  display: grid;
  width: 95%;
  height: 95%;
  grid-template-rows: 10% 80% 10%;
  padding: 5px;
  background-color: ${COLORS.BLUE_PASTEL};
`;
export const LayoutSaleResumeDataCards = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 10%;
  grid-auto-rows: 10%;
  padding: 5px;
  > div {
    background-color: ${COLORS.BLUE};
  }
  > div:nth-child(even) {
    background-color: ${COLORS.DARK_BLUE};
  }
`;
