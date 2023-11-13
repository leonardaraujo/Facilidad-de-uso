import IClient from "./Client.interface";
import { IProductQuantity } from "./Product.interface";
import ISeller from "./Seller.interface";
interface IOrderNote {
  id: string;
  seller: ISeller;
  client: IClient;
  bagId: string;
  products: Array<IProductQuantity>;
}

export default IOrderNote;
