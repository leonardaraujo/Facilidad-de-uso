interface IUser {
  id: string;
  dni: string;
  name: { first: string; sur: string };
  rol: { id: ''; name: '' };
}
export default IUser;
