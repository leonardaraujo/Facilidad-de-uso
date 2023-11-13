interface IUser {
  id: string;
  dni: string;
  name: { first: string; sur: string };
  rol: string;
}
// venta encargado jefe admin
export default IUser;
