import COLORS from '../../../constants/colors/COLORS';
import styled from 'styled-components';
export const LayoutClientCard = styled.div`
  display: grid;
  height: 90%;
  width: 95%;
  align-items: center;
  justify-items: center;
  gap: 2px;
  padding: 1px;
  grid-template-columns: 1fr 4fr 1fr;
  background-color: ${COLORS.BLUE_PASTEL};
`;
export const LayoutTextClient = styled.div`
  height: auto;
  width: 220px;
  justify-self: start;
  word-wrap: break-word;
`;
export const LayoutOrderNoteAppClient = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
