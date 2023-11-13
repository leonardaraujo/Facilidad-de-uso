import apiLeodan from './api';
export const fAddOrderNote = async (data: any) => {
  const respond = await apiLeodan.post('/api/orderNote', data);
  return respond;
};
