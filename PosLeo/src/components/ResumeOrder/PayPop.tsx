import useResumeOrderStore from "../../store/resumeOrderStore";
import plusAll from "../../utils/plusAll";
import { FullButton } from "../style/general/Button.styles";
import { Title } from "../style/general/Text.styles";
import { LayoutPayCard } from "../style/payPop/payPop.styles";
import { LayoutPayPop } from "../style/resumeOrder/Cart.styles";
import { useState, useRef } from "react";
import Select from "react-select";
import BackButton from "../general/BackButton";
import { fPostSaleNote } from "../../fetch/fSaleNote";
import {
  PipeSaleNote,
  PipeSaleNoteMoney,
} from "../../utils/pipes/PipeSaleNote";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { fDeleteOrderNote } from "../../fetch/fOrderNote";
import useOrderNotesStore from "../../store/orderNotesStore";
import useUserStore from "../../store/userStore";
import usePrinterStore from "../../store/printerStore";
import { writeData } from "../../utils/printerUtils";
import rawReceiptNotaPedido from "../../utils/rawReceiptNotaPedido";
import PrintSwitch from "./PrintSwitch";
import PayPopCash from "./PayPopCash";
const PayPop = ({ closePop }: { closePop: any }) => {
  const [checked, setChecked] = useState(true);
  const { toggleCharacteristic } = usePrinterStore((state) => ({
    toggleCharacteristic: state.toggleCharacteristic,
  }));
  const cashier = useUserStore((state) => ({
    id: state.id,
    name: state.name,
    dni: state.dni,
  }));
  const navigate = useNavigate();
  const paymentOptions = [
    {
      value: { id: "1", name: "Efectivo" },
      label: "💲 Efectivo",
    },
    {
      value: { id: "2", name: "Transferencia" },
      label: "➡ Transferencia",
    },
    {
      value: { id: "3", name: "Tarjeta débito o crédito" },
      label: "💳 Tarjeta débito o crédito",
    },
    {
      value: { id: "4", name: "Billetera electrónica" },
      label: "💸 Billetera electrónica",
    },
  ];
  const deleteOrderNote = useOrderNotesStore((state) => state.deleteOrderNote);
  const [payWithMoney, setPayWithMoney] = useState(true);
  const resumeOrderNote = useResumeOrderStore((state) => state.resumeOrderNote);
  const totalMoneyOrder = useRef(plusAll(resumeOrderNote.products));
  const [money, setMoney] = useState(0);
  const [valueSelect, setValueSelect] = useState(paymentOptions[0]);
  const [isSending, setIsSending] = useState(false);
  const handleSelect = (e: any) => {
    setValueSelect(e);
    console.log(e.value.id);
    if (e.value.id == "1") {
      setPayWithMoney(true);
    } else {
      setPayWithMoney(false);
    }
  };
  return (
    <LayoutPayPop>
      <LayoutPayCard>
        <BackButton
          onClick={() => {
            closePop(false);
          }}
          disabled={isSending}
        ></BackButton>
        <PrintSwitch checked={checked} setChecked={setChecked}></PrintSwitch>
        <Title>Tipo de pago</Title>
        <Select
          isSearchable={false}
          onChange={(data) => {
            handleSelect(data);
          }}
          value={valueSelect}
          options={paymentOptions}
        ></Select>
        {payWithMoney ? (
          <>
            <PayPopCash
              money={money}
              setMoney={setMoney}
              totalMoneyOrder={totalMoneyOrder}
            ></PayPopCash>
            <FullButton
              btype="success"
              disabled={
                (money >= totalMoneyOrder.current &&
                money - totalMoneyOrder.current <= 200
                  ? false
                  : true) || isSending
              }
              onClick={() => {
                Swal.fire({
                  title: "¿Realizar venta?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "green",
                  confirmButtonText: "Realizar venta",
                  cancelButtonText: `Volver`,
                  allowOutsideClick: false,
                  reverseButtons: true,
                }).then((result) => {
                  if (result.isConfirmed) {
                    setIsSending(true);
                    fPostSaleNote(
                      PipeSaleNoteMoney(
                        resumeOrderNote,
                        valueSelect.value,
                        money,
                        cashier
                      )
                    )
                      .then((respond) => {
                        console.log(respond);
                        if (checked) {
                          writeData(
                            rawReceiptNotaPedido(
                              respond.data.products,
                              respond.data.client,
                              respond.data.date,
                              respond.data.id,
                              respond.data.seller,
                              respond.data.bagId
                            ),
                            toggleCharacteristic
                          )
                            .then(() => console.log("printed"))
                            .catch((err) => console.log(err));
                        }

                        fDeleteOrderNote(resumeOrderNote.id).then(() => {
                          deleteOrderNote(resumeOrderNote.id);
                          Swal.fire({
                            icon: "success",
                            title: "Venta realizada",
                            showConfirmButton: false,
                            timer: 1500,
                            allowOutsideClick: false,
                          })
                            .then(() => {
                              navigate("/app", { replace: true });
                            })
                            .catch(() => {
                              Swal.fire({
                                icon: "error",
                                title:
                                  "Ocurrió un error eliminando la nota de pedido",
                                showConfirmButton: false,
                                timer: 1500,
                                allowOutsideClick: false,
                              });
                            });
                        });
                      })
                      .catch(() => {
                        Swal.fire({
                          icon: "error",
                          title: "Ocurrió un error realizando la venta",
                          showConfirmButton: false,
                          timer: 1500,
                          allowOutsideClick: false,
                        });
                        setIsSending(false);
                      });
                  }
                });
              }}
            >
              Pagar
            </FullButton>
          </>
        ) : (
          <>
            <div></div>
            <FullButton
              disabled={isSending}
              btype="success"
              onClick={() => {
                Swal.fire({
                  title: "¿Realizar venta?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "green",
                  confirmButtonText: "Realizar venta",
                  cancelButtonText: `Volver`,
                  allowOutsideClick: false,
                  reverseButtons: true,
                }).then((result) => {
                  if (result.isConfirmed) {
                    setIsSending(true);
                    fPostSaleNote(
                      PipeSaleNote(resumeOrderNote, valueSelect.value, cashier)
                    )
                      .then((respond) => {
                        if (checked) {
                          writeData(
                            rawReceiptNotaPedido(
                              respond.data.products,
                              respond.data.client,
                              respond.data.date,
                              respond.data.id,
                              respond.data.seller,
                              respond.data.bagId
                            ),
                            toggleCharacteristic
                          )
                            .then(() => console.log("printed"))
                            .catch((err) => console.log(err));
                        }

                        fDeleteOrderNote(resumeOrderNote.id).then(() => {
                          deleteOrderNote(resumeOrderNote.id);
                          Swal.fire({
                            icon: "success",
                            title: "Venta realizada",
                            showConfirmButton: false,
                            timer: 1500,
                            allowOutsideClick: false,
                          })
                            .then(() => {
                              navigate("/app", { replace: true });
                            })
                            .catch(() => {
                              Swal.fire({
                                icon: "error",
                                title:
                                  "Ocurrió un error eliminando la nota de pedido",
                                showConfirmButton: false,
                                timer: 1500,
                                allowOutsideClick: false,
                              });
                            });
                        });
                      })
                      .catch(() => {
                        Swal.fire({
                          icon: "error",
                          title: "Ocurrió un error realizando la venta",
                          showConfirmButton: false,
                          timer: 1500,
                          allowOutsideClick: false,
                        });
                        setIsSending(false);
                      });
                  }
                });
              }}
            >
              Pagar
            </FullButton>
          </>
        )}
      </LayoutPayCard>
    </LayoutPayPop>
  );
};
export default PayPop;
