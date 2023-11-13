import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import IOrderNote from '../interfaces/OrderNote.interface';

interface IOrderNotesStore {
  orderNotes: Array<IOrderNote>;
  addOrderNote: (payload: IOrderNote) => void;
  deleteOrderNote: (payload: string) => void;
  setAllOrderNotes: (payload: Array<IOrderNote>) => void;
}
const useOrderNotesStore = create(
  devtools<IOrderNotesStore>((set) => ({
    orderNotes: [],
    addOrderNote: (payload: IOrderNote) =>
      set((state: IOrderNotesStore) => ({
        orderNotes: [
          ...state.orderNotes,
          {
            id: payload.id,
            seller: payload.seller,
            client: payload.client,
            products: payload.products,
          },
        ],
      })),
    deleteOrderNote: (payload: string) =>
      set((state: IOrderNotesStore) => {
        const newOrderNotes = state.orderNotes.filter(
          (orderNote) => orderNote.id !== payload
        );
        return { orderNotes: newOrderNotes };
      }),
    setAllOrderNotes: (payload: Array<IOrderNote>) =>
      set(() => ({ orderNotes: payload })),
  }))
);
export default useOrderNotesStore;
