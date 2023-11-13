import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import IClient from "../interfaces/IClient";
import { IOrderNote } from "../interfaces/IOrderNote";
import { ISeller } from "../interfaces/ISeller";
import { IProductQuantity } from "../interfaces/IProduct";
interface clientStore extends IOrderNote {
  setClient: (payload: IClient) => void;
  deleteClient: () => void;
  setSeller: (payload: ISeller) => void;
  deleteAllProducts: () => void;
  setAllProducts: (payload: Array<IProductQuantity>) => void;
  setBagId: (payload: string) => void;
}
const useSendNote = create(
  persist<clientStore>(
    (set) => ({
      bagId: "",
      client: { dni: "", name: "" },
      seller: {
        color: { card: "", text: "" },
        dni: "",
        id: "",
        name: { sur: "", first: "" },
        rol: "",
      },
      products: [],
      id: "",
      setClient: (payload) =>
        set((state) => ({
          ...state,
          client: {
            dni: payload.dni,
            name: payload.name,
          },
        })),
      deleteClient: () =>
        set((state) => ({
          ...state,
          client: {
            dni: "",
            name: "",
          },
        })),
      setSeller: (payload) =>
        set((state) => ({
          ...state,
          seller: {
            color: { card: payload.color.card, text: payload.color.text },
            dni: payload.dni,
            id: payload.id,
            name: { sur: payload.name.sur, first: payload.name.first },
            rol: payload.rol,
          },
        })),
      deleteAllProducts: () => set((state) => ({ ...state, products: [] })),
      setAllProducts: (payload) =>
        set((state) => ({ ...state, products: payload })),
      setBagId: (payload) => set((state) => ({ ...state, bagId: payload })),
      deleteBagId: () => set((state) => ({ ...state, bagId: "" })),
    }),
    {
      name: "send-note-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
export default useSendNote;
