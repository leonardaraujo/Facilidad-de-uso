interface ISeller {
  id: string;
  dni: string;
  name: { first: string; sur: string };
  rol: string;
  color: { card: string; text: string };
}
export interface ISellerSaleNote {
  id: string;
  dni: string;
  name: { first: string; sur: string };
}
// venta encargado jefe admin
export default ISeller;
