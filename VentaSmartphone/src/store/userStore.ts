import { create } from 'zustand';
import IUser from '../interfaces/IUser';
interface userStore extends IUser {
  setUser: (payload: IUser) => void;
  deleteUser: () => void;
}
const useUserStore = create<userStore>((set) => ({
  id: '',
  dni: '',
  name: { sur: '', first: '' },
  rol: { id: '', name: '' },
  setUser: (payload: IUser) =>
    set(
      (): IUser => ({
        id: payload.id,
        dni: payload.dni,
        name: payload.name,
        rol: payload.rol,
      })
    ),
  deleteUser: () =>
    set(
      (): IUser => ({
        id: '',
        dni: '',
        name: { first: '', sur: '' },
        rol: { id: '', name: '' },
      })
    ),
}));
export default useUserStore;
