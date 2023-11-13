import IClient from "./IClient";
import { IProductQuantity } from "./IProduct";
import { ISeller } from "./ISeller";
export interface IOrderNote {
  id: string;
  bagId: string;
  seller: ISeller;
  client: IClient;
  products: Array<IProductQuantity>;
}
