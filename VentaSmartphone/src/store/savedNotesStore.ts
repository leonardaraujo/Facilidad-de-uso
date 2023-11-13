import { create } from 'zustand';
import { IOrderNote } from '../interfaces/IOrderNote';
import { persist, createJSONStorage } from 'zustand/middleware';
interface IOrderNotesStore {
  savedNotes: Array<IOrderNote>;
  addOrderNoteToSave: (payload: IOrderNote) => void;
  deleteSavedNote: (id: string) => void;
}
const useSavedNotesStore = create(
  persist<IOrderNotesStore>(
    (set) => ({
      savedNotes: [],
      addOrderNoteToSave: (payload) =>
        set((state) => {
          if (state.savedNotes.length > 2) {
            state.savedNotes.shift(); // Eliminar el primer elemento si la longitud es mayor que 10
          }
          return {
            ...state,
            savedNotes: [
              ...state.savedNotes,
              {
                id: payload.id,
                seller: payload.seller,
                client: payload.client,
                products: payload.products,
              },
            ],
          };
        }),
      deleteSavedNote: (id) =>
        set((state) => {
          const newSavedNotes = state.savedNotes.filter(
            (savedNote) => savedNote.id !== id
          );
          return { ...state, savedNotes: newSavedNotes };
        }),
    }),
    {
      name: 'savedNotes-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
export default useSavedNotesStore;
