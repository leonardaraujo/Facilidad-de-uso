import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';

export const LoginLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.BLUE};
  display: grid;
  grid-template-rows: 20% 80%;
  align-items:center;
  justify-items:center;
`;
