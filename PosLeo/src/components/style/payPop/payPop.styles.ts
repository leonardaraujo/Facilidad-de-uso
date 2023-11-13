import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const LayoutPayCard = styled.div`
  position: relative;
  height: 500px;
  width: 700px;
  background-color: ${COLORS.BLUE};
  display: grid;
  grid-template-rows: 15% 10% 60% 15%;
  padding: 5px;
`;
export const LayoutPayWithMoney = styled.div`
  display: grid;
  grid-template-rows: 20% 30% 50%;
  background-color: ${COLORS.DEEP_SEA};
`;
export const LayoutPayCardInputReset = styled.div`
  display: grid;
  grid-template-columns: 15% 55% 30%;
  align-items: center;
`;
export const LayoutPayCardMoneyButtons = styled.div`
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;
export const LayoutPayCardMoneyText = styled.div`
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: ${COLORS.GRAY_DARK};
`;
