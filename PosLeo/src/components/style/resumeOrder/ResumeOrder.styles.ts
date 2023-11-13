import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const LayoutResumeOrder = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  align-items: center;
`;
export const LayoutResumeData = styled.div`
  display: grid;
  width: 95%;
  height: 95%;
  grid-template-rows: 10% 90%;
  padding: 5px;
  background-color: ${COLORS.BLUE_PASTEL};
`;
export const LayoutResumeDataCards = styled.div`
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
