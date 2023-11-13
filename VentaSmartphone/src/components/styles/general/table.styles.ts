import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';
export const FullWithTable = styled.table`
  width: 100%;
  font-size: 15px;
  color: white;

`;
export const FullWithTableCollapse = styled.table`
  width: 100%;
  font-size: 15px;
  color: white;
  border-collapse: collapse;
  border: 1px;
`;
export const StyledTHead = styled.thead`
  background-color: black;
  height: 35px;
  text-align: center;
`;
export const StyledTBody = styled.tbody`
  text-align: center;
  tr {
    background: ${COLORS.BLUE_PASTEL_LOW};
  }
  tr:nth-child(even) {
    background: ${COLORS.BLUE_PASTEL};
  }
`;
export const StyledTrProduct = styled.tr`
  height: 50px;
`;
export const EditThCart = styled.th`
  width: 10%;
`;
export const NameThCart = styled.th`
  width: 45%;
`;
export const QuantityThCart = styled.th`
  width: 10%;
`;
export const PriceThCart = styled.th`
  width: 15%;
`;
export const SubTotalThCart = styled.th`
  width: 15%;
`;
export const EditTdCart = styled.th`
  width: 10%;
`;
export const NameTdCart = styled.th`
  width: 45%;
  word-break: break-all;
`;
export const QuantityTdCart = styled.th`
  width: 10%;
`;
export const PriceTdCart = styled.th`
  width: 15%;
`;
export const SubTotalTdCart = styled.th`
  width: 15%;
`;
export const ContainerProductsTable = styled.div`
  width: auto;
  height: 100%;
  overflow-y: auto;
`;
export const RecordTdIcon = styled.td`
  width: 10%;
`;
export const RecordTdName = styled.td`
  width: 20%;
  word-break: break-all;
`;
export const RecordTdProducts = styled.td`
  width: 40%;
  word-break: break-all;
`;
export const RecordTdQuantity = styled.td`
  width: 20%;
`;
export const RecordTbody = styled.tbody`
  text-align: center;
  tr {
    background: ${COLORS.BLUE_PASTEL_LOW};
  }
  tr:nth-child(even) {
    background: ${COLORS.BLUE_PASTEL};
  }
`;
export const RecordTrBody = styled.tr`
  height: 85px;
`;
export const ContainerTableRecord = styled.div`
  height: 100%;
  width: 100%;
`;
export const ContainerTBodyRecord = styled.div`
  height: 100%;
  width: auto;
  overflow-y: auto;
`;
export const LayoutRecordHeadBody = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 10% 90%;
  padding: 2px;
`;
