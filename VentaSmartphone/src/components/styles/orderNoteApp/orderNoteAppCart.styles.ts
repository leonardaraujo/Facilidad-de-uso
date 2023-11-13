import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const LayoutOrderNoteAppCart = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 7% 81% 12%;
  justify-items: center;
  align-items: center;
`;
export const LayoutAppCartHeadBody = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 10% 90%;
  padding: 2px;
`;
export const LayoutCartTotal = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 40% 60%;
  justify-items: center;
  align-items: center;
`;
export const ContainerTotalUnits = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  justify-items: center;
  align-items: center;
  background: ${COLORS.DARK_BLUE};
  font-size: 20px;
  padding: 5px;
`;
export const LayoutCartMoney = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  justify-items: center;
  align-items: center;
  background: ${COLORS.DARK_BLUE};
  font-size: 25px;
  color: #00bb2d;
`;
export const LayoutProductPopAdd = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${COLORS.DEEP_SEA + 80};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: grid;
  justify-items: center;
  align-items: center;
`;
export const LayoutAddProduct = styled.div`
  position: relative;
  height: 500px;
  width: 320px;
  background-color: ${COLORS.BLUE_PASTEL};
  display: grid;
  grid-template-rows: 15% 60% 15%;
  justify-items: center;
  align-items: center;
`;
export const LayoutProductPopEdit = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${COLORS.DEEP_SEA + 80};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: grid;
  justify-items: center;
  align-items: center;
`;
export const LayoutEditProduct = styled.div`
  position: relative;
  height: 500px;
  width: 320px;
  background-color: ${COLORS.BLUE_PASTEL};
  display: grid;
  grid-template-rows: 15% 60% 25%;
  justify-items: center;
  align-items: center;
`;
export const LayoutEditProductButtons = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr 5fr;
  gap: 5px;
  padding: 10px;
  justify-items: center;
  align-items: center;
`;
export const LayoutEditPopAddProductsTextInput = styled.div`
  display: grid;
  height: 100%;
  width: 70%;
  grid-template-rows: 10% 20% 10% 20% 10% 20%;
  gap: 5px;
  justify-items: start;
  align-items: center;
`;
