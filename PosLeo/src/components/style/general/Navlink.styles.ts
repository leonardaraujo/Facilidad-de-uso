import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const MyNavLink = styled(NavLink)`
  width: 200px;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  border: 0px;
  justify-items: center;
  text-decoration: none;
  background-color: ${COLORS.BLUE_PASTEL};
  &:hover {
    background-color: ${COLORS.BLUE_PASTEL_HOVER};
  }
  &.active {
    background-color: ${COLORS.BLUE_PASTEL_HOVER};
  }
`;
