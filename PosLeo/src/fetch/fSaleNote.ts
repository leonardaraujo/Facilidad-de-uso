import ISaleNote from '../interfaces/SaleNote.interface';
import apiLeodan from './api';
export const fPostSaleNote = async (saleNote: ISaleNote) => {
  const respond = await apiLeodan.post('/api/saleNote', saleNote);
  return respond;
};
export const fGetSaleNote = async (id: string | undefined) => {
  const respond = await apiLeodan.get(`/api/saleNote/${id}`);
  return respond;
};
export const fUpdateChange = async (id: string | undefined, date: string) => {
  const respond = await apiLeodan.patch(`/api/saleNoteUpdateChange`, {
    id,
    date,
  });
  return respond;
};
export const fGetLastSaleNotes = async () => {
  const respond = await apiLeodan.get('api/lastSaleNotes');
  return respond;
};
