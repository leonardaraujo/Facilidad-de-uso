import ISaleNote from '../../interfaces/SaleNote.interface';
import numeral from 'numeral';
import plusAll from '../../utils/plusAll';
import { Text } from '../style/general/Text.styles';
import {
  CodeTdSearcher,
  CodeThSearcher,
  ContainerSaleNotesTable,
  FullWithTable,
  NameClientTdSearcher,
  NameClientThSearcher,
  SellerTdSearcher,
  SellerThSearcher,
  StyledTBodySearcher,
  StyledTHeadSearcher,
  StyledTrSearcherSaleNote,
  TotalTdSearcher,
  TotalThSearcher,
} from '../style/general/Table.styles';
import { useNavigate } from 'react-router-dom';
const ContainerSaleNotes = ({
  saleNotes,
}: {
  saleNotes: Array<ISaleNote> | [];
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <FullWithTable>
        <StyledTHeadSearcher>
          <tr>
            <CodeThSearcher>
              <Text>Código</Text>
            </CodeThSearcher>
            <SellerThSearcher>Vendedora</SellerThSearcher>
            <NameClientThSearcher>
              <Text>Cliente</Text>
            </NameClientThSearcher>
            <TotalThSearcher>
              <Text>Monto</Text>
            </TotalThSearcher>
          </tr>
        </StyledTHeadSearcher>
      </FullWithTable>
      <ContainerSaleNotesTable>
        <FullWithTable>
          <StyledTBodySearcher>
            {saleNotes.map((saleNote: ISaleNote) => (
              <StyledTrSearcherSaleNote
                key={saleNote.id}
                onClick={() =>
                  navigate(`/app/saleNote/${saleNote.id}`, { replace: true })
                }
              >
                <CodeTdSearcher>
                  <Text>{saleNote.id}</Text>
                </CodeTdSearcher>
                <SellerTdSearcher>
                  {saleNote.seller.name.first} {saleNote.seller.name.sur}
                </SellerTdSearcher>
                <NameClientTdSearcher>
                  <Text>Nombre: {saleNote.client.name}</Text>
                  <Text>Dni: {saleNote.client.dni}</Text>
                </NameClientTdSearcher>
                <TotalTdSearcher>
                  <Text>
                    S/{numeral(plusAll(saleNote.products)).format('0.00')}
                  </Text>
                </TotalTdSearcher>
              </StyledTrSearcherSaleNote>
            ))}
          </StyledTBodySearcher>
        </FullWithTable>
      </ContainerSaleNotesTable>
    </div>
  );
};
export default ContainerSaleNotes;
