import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const LayoutPreview = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 6% 10% 74% 10%;
  justify-items: center;
  align-items: center;
  background-color: ${COLORS.DEEP_SEA};
`;
