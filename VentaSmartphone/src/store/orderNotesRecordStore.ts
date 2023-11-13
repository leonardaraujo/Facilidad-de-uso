import { create } from "zustand";
import { IOrderNote } from "../interfaces/IOrderNote";
import { persist, createJSONStorage } from "zustand/middleware";
interface IOrderNotesStore {
  orderNotes: Array<IOrderNote>;
  addOrderNoteToHistory: (payload: IOrderNote) => void;
}
const useOrderNotesRecordStore = create(
  persist<IOrderNotesStore>(
    (set) => ({
      orderNotes: [],
      addOrderNoteToHistory: (payload) =>
        set((state) => {
          if (state.orderNotes.length > 5) {
            state.orderNotes.shift(); // Eliminar el primer elemento si la longitud es mayor que 10
          }
          return {
            ...state,
            orderNotes: [
              ...state.orderNotes,
              {
                id: payload.id,
                seller: payload.seller,
                client: payload.client,
                products: payload.products,
                bagId: payload.bagId,
              },
            ],
          };
        }),
    }),
    {
      name: "orderNotes-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
export default useOrderNotesRecordStore;
