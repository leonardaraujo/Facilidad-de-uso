import apiLeodan from './api';

export const fGetOrderNotes = async () => {
  const respond = await apiLeodan.get('/api/orderNotes');
  return respond;
};
export const fDeleteOrderNote = async (id: string) => {
  const respond = await apiLeodan.post('/api/deleteOrderNote', { id: id });
  return respond;
};
