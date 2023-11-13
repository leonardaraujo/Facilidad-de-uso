import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const LayoutPreviewClientCard = styled.div`
  display: grid;
  height: 90%;
  width: 95%;
  align-items: center;
  justify-items: center;
  gap: 2px;
  padding: 1px;
  grid-template-columns: 1fr 5fr;
  background-color: ${COLORS.BLUE_PASTEL};
`;
export const LayoutPreviewCardText = styled.div`
  height: auto;
  width: 260px;
  justify-self: start;
  word-wrap: break-word;
`;
export const LayoutPreviewCart = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 88% 12%;
  justify-items: center;
  align-items: center;
`;
export const LayoutPreviewButtons = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 40% 60%;
`;
