import { ICashierSaleNote } from "./Cashier.interface";
import IClient from "./Client.interface";
import { IProductQuantity } from "./Product.interface";
import { ISellerSaleNote } from "./Seller.interface";

interface ISaleNote {
  id: string;
  seller: ISellerSaleNote;
  cashier: ICashierSaleNote;
  change?: { state: boolean; date: string };
  products: Array<IProductQuantity>;
  client: IClient;
  date: string;
  paymentType: { id: string; name: string };
  payWith?: number;
  bagId: string;
}
export default ISaleNote;
