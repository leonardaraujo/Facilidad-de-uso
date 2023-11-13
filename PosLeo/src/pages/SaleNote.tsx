import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SaleNoteResumeData from "../components/SaleNote/SaleNoteResumeData";
import { fGetSaleNote } from "../fetch/fSaleNote";
import { LayoutSaleNote } from "../components/style/SaleNote/saleNote.styles";
import SaleNoteCart from "../components/SaleNote/SaleNoteCart";
import { useNavigate } from "react-router-dom";
const SaleNote = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [saleNote, setSaleNote] = useState({
    id: "",
    client: { name: "", dni: "" },
    seller: { id: "", dni: "", name: { first: "", sur: "" } },
    date: "",
    change: { state: false, date: "" },
    paymentType: { id: "", name: "" },
    paidWith: 0,
    products: [],
    cashier: { id: "", dni: "", name: { first: "", sur: "" } },
    bagId: "",
  });
  useEffect(() => {
    fGetSaleNote(id)
      .then((respond) => {
        setSaleNote(respond.data);
      })
      .catch(() => navigate("/app/saleNote/notFound"));
  }, []);

  return (
    <LayoutSaleNote>
      <SaleNoteResumeData
        id={saleNote.id}
        client={saleNote.client}
        seller={saleNote.seller}
        date={saleNote.date}
        change={saleNote?.change}
        paymentType={saleNote.paymentType}
        paidWith={saleNote?.paidWith}
        cashier={saleNote.cashier}
      ></SaleNoteResumeData>
      <SaleNoteCart
        saleNote={saleNote}
        products={saleNote.products}
      ></SaleNoteCart>
    </LayoutSaleNote>
  );
};
export default SaleNote;
