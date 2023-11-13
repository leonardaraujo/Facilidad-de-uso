import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const LayoutOrderNotes = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 15% 85%;
`;
export const LayoutTopOrderNotes = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 20% 20% 50% 10%;
  background-color: ${COLORS.BLUE};
  justify-items: center;
  align-items: center;
`;
export const LayoutContainerOrderNotes = styled.div`
  margin: 20px;
  display: grid;
  grid-template-rows: 20%;
  grid-auto-rows: 20%;
  justify-items: center;
  align-items: center;
  gap: 10px;
  overflow: scroll;
`;
export const LayoutCardOrderNote = styled.div<{
  $colorcard?: string;
  $colortext?: string;
}>`
  height: 98%;
  width: 100%;
  background-color: ${({ $colorcard = COLORS.YELLOW }) => {
    return $colorcard;
  }};
  color: ${({ $colortext = 'black' }) => {
    return $colortext;
  }};
  display: grid;
  grid-template-columns: 20% 20% 50% 10%;
  justify-items: center;
  align-items: center;

  border-radius: 10px;
`;
