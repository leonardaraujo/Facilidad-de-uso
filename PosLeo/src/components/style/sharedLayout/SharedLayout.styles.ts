import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const ContainerSharedLayout = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${COLORS.DEEP_SEA};
  display: grid;
  grid-template-rows: 85% 15%;
  position: relative;
`;
