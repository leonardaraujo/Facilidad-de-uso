import IClient from '../../interfaces/Client.interface';
import { ISellerSaleNote } from '../../interfaces/Seller.interface';
import ClientCard from '../ResumeOrder/ClientCard';
import SellerCard from '../ResumeOrder/SellerCard';
import ChangeCard from '../general/ChangeCard';
import CodeCard from '../general/CodeCard';
import PaymentTypeCard from '../general/PaymentTypeCard';
import TimeCard from '../general/TimeCard';
import Swal from 'sweetalert2';
import {
  LayoutSaleNoteResumeData,
  LayoutSaleResumeDataCards,
} from '../style/SaleNote/saleNoteResumeData.styles';
import { StyledButton } from '../style/general/Button.styles';
import { Title } from '../style/general/Text.styles';
import { fUpdateChange } from '../../fetch/fSaleNote';
import CashierCard from '../general/CashierCard';
import { ICashierSaleNote } from '../../interfaces/Cashier.interface';
const SaleNoteResumeData = ({
  client,
  seller,
  id,
  date,
  change,
  paymentType,
  paidWith,
  cashier,
}: {
  client: IClient;
  seller: ISellerSaleNote;
  id: string;
  date: string;
  change: { state: boolean; date: string };
  paymentType: { id: string; name: string };
  paidWith: number;
  cashier: ICashierSaleNote;
}) => {
  return (
    <LayoutSaleNoteResumeData>
      <Title>Documento de compra</Title>
      <LayoutSaleResumeDataCards>
        <SellerCard seller={seller}></SellerCard>
        <ClientCard client={client}></ClientCard>
        <CashierCard cashier={cashier}></CashierCard>
        <TimeCard date={date}></TimeCard>
        <ChangeCard change={change}></ChangeCard>
        <PaymentTypeCard
          paymentType={paymentType}
          paidWith={paidWith}
        ></PaymentTypeCard>
        <CodeCard id={id}></CodeCard>
      </LayoutSaleResumeDataCards>
      <StyledButton
        onClick={() => {
          Swal.fire({
            title: 'Deseas realizar el cambio con la fecha de hoy?',
            showDenyButton: true,
            confirmButtonText: 'Realizar cambio',
          }).then((result) => {
            if (result.isConfirmed) {
              const date = new Date();
              fUpdateChange(id, date.toISOString()).then(() => {
                Swal.fire({
                  icon: 'success',
                  title: 'Cambio realizado',
                  showConfirmButton: false,
                  timer: 1500,
                  allowOutsideClick: false,
                }).then(() => {
                  window.location.reload();
                });
              });
            }
          });
        }}
        disabled={change?.state ? true : false}
      >
        Realizar cambio
      </StyledButton>
    </LayoutSaleNoteResumeData>
  );
};
export default SaleNoteResumeData;
