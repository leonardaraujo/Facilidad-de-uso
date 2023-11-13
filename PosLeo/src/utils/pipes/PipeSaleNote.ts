import { ICashierSaleNote } from "../../interfaces/Cashier.interface";
import IOrderNote from "../../interfaces/OrderNote.interface";
import ISaleNote from "../../interfaces/SaleNote.interface";
import { nanoid } from "nanoid";
export const PipeSaleNoteMoney = (
  orderNotes: IOrderNote,
  paymentType: { id: string; name: string },
  paidWith: number,
  cashier: ICashierSaleNote
): ISaleNote => {
  const date = new Date().toISOString();
  const saleNote = {
    id: nanoid(15),
    seller: {
      id: orderNotes.seller.id,
      dni: orderNotes.seller.dni,
      name: orderNotes.seller.name,
    },
    cashier,
    client: orderNotes.client,
    products: orderNotes.products,
    date: date,
    paymentType: paymentType,
    paidWith,
    bagId: orderNotes.bagId,
  };
  return saleNote;
};

export const PipeSaleNote = (
  orderNotes: IOrderNote,
  paymentType: { id: string; name: string },
  cashier: ICashierSaleNote
): ISaleNote => {
  const date = new Date().toISOString();
  const saleNote = {
    id: nanoid(15),
    seller: {
      id: orderNotes.seller.id,
      dni: orderNotes.seller.dni,
      name: orderNotes.seller.name,
    },
    cashier,
    client: orderNotes.client,
    products: orderNotes.products,
    date: date,
    paymentType: paymentType,
    bagId: orderNotes.bagId,
  };
  return saleNote;
};
