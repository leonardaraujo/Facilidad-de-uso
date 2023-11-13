export interface IProduct {
  id: string;
  name: string;
  price: number;
}
export interface IProductQuantity extends IProduct {
  quantity: number;
}
