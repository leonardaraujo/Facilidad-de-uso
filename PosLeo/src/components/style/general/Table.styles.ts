import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';

export const FullWithTable = styled.table`
  width: 100%;
  font-size: 20px;
  color: white;
  border-collapse: collapse;
`;
export const StyledTHead = styled.thead`
  background-color: ${COLORS.BLUE_PASTEL};
  height: 50px;
  text-align: center;
`;
export const StyledTBody = styled.tbody`
  text-align: center;
  tr {
    background: ${COLORS.GRAY};
  }
  tr:nth-child(even) {
    background: ${COLORS.GRAY_DARK};
  }
`;
export const StyledTr = styled.tr`
  height: 50px;
`;
export const NameTh = styled.th`
  width: 50%;
`;
export const StyledTHeadSearcher = styled.thead`
  background-color: black;
  height: 100px;
  text-align: center;
`;
export const StyledTBodySearcher = styled.tbody`
  text-align: center;
  tr {
    background: ${COLORS.BLUE};
  }
  tr:nth-child(even) {
    background: ${COLORS.BLUE_PASTEL};
  }
`;
export const CodeThSearcher = styled.th`
  width: 20%;
`;
export const SellerThSearcher = styled.th`
  width: 20%;
`;
export const NameClientThSearcher = styled.th`
  width: 40%;
`;
export const TotalThSearcher = styled.th`
  width: 20%;
`;

export const CodeTdSearcher = styled.td`
  width: 20%;
`;
export const NameClientTdSearcher = styled.td`
  width: 40%;
`;
export const SellerTdSearcher = styled.td`
  width: 20%;
`;
export const TotalTdSearcher = styled.td`
  width: 20%;
`;
export const StyledTrSearcherSaleNote = styled.tr`
  height: 150px;
`;
export const ContainerSaleNotesTable = styled.div`
  width: 100%;
  height: 80%;
  overflow: scroll;
`;
