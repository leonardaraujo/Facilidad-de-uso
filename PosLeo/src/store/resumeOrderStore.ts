import { create } from "zustand";
import IOrderNote from "../interfaces/OrderNote.interface";
interface IOrderNoteStore {
  resumeOrderNote: IOrderNote;
  setResumenOrderNote: (payload: IOrderNote) => void;
  deleteResumenOrderNote: () => void;
}
const useResumeOrderStore = create<IOrderNoteStore>((set) => ({
  resumeOrderNote: {
    id: "",
    bagId: "",
    seller: {
      id: "",
      dni: "",
      name: { first: "", sur: "" },
      rol: "",
      color: { card: "", text: "" },
    },
    client: { dni: "", name: "" },
    products: [],
  },
  setResumenOrderNote: (payload: IOrderNote) =>
    set(() => ({
      resumeOrderNote: payload,
    })),
  deleteResumenOrderNote: () =>
    set(() => ({
      resumeOrderNote: {
        id: "",
        bagId: "",
        seller: {
          id: "",
          dni: "",
          name: { first: "", sur: "" },
          rol: "",
          color: { card: "", text: "" },
        },
        client: { dni: "", name: "" },
        products: [],
      },
    })),
}));

export default useResumeOrderStore;
