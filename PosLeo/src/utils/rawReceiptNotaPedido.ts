// @ts-nocheck
import EscPosEncoder from "esc-pos-encoder";
import numeral from "numeral";
import dayjs from "dayjs";
import { IProductQuantity } from "../interfaces/Product.interface";
import IClient from "../interfaces/Client.interface";
import { ISellerSaleNote } from "../interfaces/Seller.interface";
let encoder = new EscPosEncoder({ language: "esc-pos", width: 58 });

function rawReceiptNotaPedido(
  products: Array<IProductQuantity>,
  client: IClient,
  date: string,
  id: string,
  seller: ISellerSaleNote,
  bagId: string
) {
  console.log(client);
  let logo = encoder
    .initialize()
    .codepage("windows1252")
    .align("center")
    .width(3)
    .height(3)
    .line("Leodan's");

  let datosEmpresa = logo
    .width(1)
    .height(1)
    .line("RUC: 10415831396 ")
    .line("HUAMANI ZEVALLOS ELVA")
    .line("Teléfono: 938588279")
    .line("Prolongación Ica N 184")
    .line('Centro comercial "Santa Rosa"')
    .line("Stand #13")
    .newline();
  let datosCliente = datosEmpresa
    .align("left")
    .line(`Vendedor@: ${seller.name.first} ${seller.name.sur}`)
    .line(`Dni cliente: ${client.dni || "00000000"}`)
    .line(`Nombre cliente: ${client.name || "Anónimo"}`);

  //fecha
  let fechaHora = datosCliente
    .line(
      `Fecha/hora:${dayjs(date).format("DD/MM/YYYY")}(${dayjs(date).format(
        "HH:mm a"
      )})`
    )
    .newline();
  let tablaProductosCabecera = [
    { width: 10, marginRight: 2, align: "left" },
    { width: 3, align: "left" },
    { width: 6, align: "center" },
    { width: 6, align: "right", marginLeft: 2 },
  ];
  let tablaProductosCuerpo: any = [
    [
      (encoder: any) => encoder.bold().text("Producto").bold(),
      (encoder: any) => encoder.bold().text("Ca").bold(),
      (encoder: any) => encoder.bold().text("Precio").bold(),
      (encoder: any) => encoder.bold().text("Subt").bold(),
    ],
  ];
  function totalSuma() {
    let total = 0;
    products.forEach((product) => {
      total += product.quantity * product.price;
    });
    return `${numeral(total).format("0.00")}`;
  }
  function totalProductos() {
    let totalProductos = 0;
    products.forEach((product) => {
      totalProductos += product.quantity;
    });
    return `${totalProductos}uds`;
  }
  products.forEach((product) => {
    tablaProductosCuerpo.push([
      product.name,
      String(product.quantity),
      numeral(product.price).format("0.00"),
      numeral(product.price * product.quantity).format("0.00"),
    ]);
  });
  tablaProductosCuerpo.push(["-----", "----", "", "-----"]);
  tablaProductosCuerpo.push(["Total", totalProductos(), "", totalSuma()]);
  let tablaProductos = fechaHora
    .align("center")
    .table(tablaProductosCabecera, tablaProductosCuerpo);
  let pieDePagina = tablaProductos
    .qrcode(id, 1, 4)

    .line(id)
    .width(2)
    .height(2)
    .invert(true)
    .line(`   ${bagId}   `)
    .invert(false)
    .width(1)
    .height(1)
    .line("Gracias por su compra")
    .newline()
    .newline()
    .encode(); 
  console.log(tablaProductosCuerpo);
  return pieDePagina;
}
export default rawReceiptNotaPedido;
