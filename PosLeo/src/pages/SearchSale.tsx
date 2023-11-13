import ContainerSaleNotes from '../components/Searchsale/ContainerSaleNotes';
import Searcher from '../components/Searchsale/Searcher';
import { useEffect, useState } from 'react';
import ISaleNote from '../interfaces/SaleNote.interface';
import { fGetLastSaleNotes } from '../fetch/fSaleNote';
import { LayoutSearchSale } from '../components/style/searchSale/SearchSale.layout';
import { Title } from '../components/style/general/Text.styles';
const SearchSale = () => {
  const [saleNotes, setSaleNotes] = useState<Array<ISaleNote> | []>([]);
  useEffect(() => {
    fGetLastSaleNotes().then((respond) => {
      setSaleNotes(respond.data);
    });
  }, []);

  return (
    <LayoutSearchSale>
      <Title>Historial de compra reciente</Title>
      <Searcher></Searcher>
      <ContainerSaleNotes saleNotes={saleNotes}></ContainerSaleNotes>
    </LayoutSearchSale>
  );
};
export default SearchSale;
