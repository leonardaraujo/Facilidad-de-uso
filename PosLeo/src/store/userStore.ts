import { create } from 'zustand';
import IUser from '../interfaces/User.interface';
interface userStore extends IUser {
  setUser: (payload: IUser) => void;
  deleteUser: () => void;
}
const useUserStore = create<userStore>((set) => ({
  id: '',
  dni: '',
  name: { first: '', sur: '' },
  rol: '',
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
        rol: '',
      })
    ),
}));
export default useUserStore;
