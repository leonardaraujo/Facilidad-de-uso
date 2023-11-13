import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const MyLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.BLUE};
  display: grid;
  align-items:center;
  justify-items:center;
  gap:5px;
  
`;
