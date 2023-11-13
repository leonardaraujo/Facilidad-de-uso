export interface ISeller {
  id: string;
  dni: string;
  name: { first: string; sur: string };
  rol: string;
  color: { card: string; text: string };
}
