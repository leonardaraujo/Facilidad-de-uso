import numeral from "numeral";
import { MoneyButton, StyledButton } from "../style/general/Button.styles";
import { StyledInputMoney } from "../style/general/Input.styles";
import { LayoutPayCardInputReset, LayoutPayCardMoneyButtons, LayoutPayCardMoneyText, LayoutPayWithMoney } from "../style/payPop/payPop.styles";
import { Text } from "../style/general/Text.styles";

const PayPopCash = ({money,setMoney,totalMoneyOrder}) => {
  return (
    <LayoutPayWithMoney>
      <LayoutPayCardInputReset>
        <Text>Paga con:</Text>
        <StyledInputMoney
          step="0.01"
          type="number"
          value={money}
          onChange={(e) => {
            setMoney(parseFloat(e.target.value));
          }}
          onBlur={() => {
            if (isNaN(money)) {
              setMoney(0);
            }
          }}
        ></StyledInputMoney>
        <StyledButton onClick={() => setMoney(0)}>Resetear a 0</StyledButton>
      </LayoutPayCardInputReset>

      <LayoutPayCardMoneyButtons>
        <MoneyButton onClick={() => setMoney((state) => state + 10)}>
          S/10.00
        </MoneyButton>
        <MoneyButton onClick={() => setMoney((state) => state + 20)}>
          S/20.00
        </MoneyButton>
        <MoneyButton onClick={() => setMoney((state) => state + 50)}>
          S/50.00
        </MoneyButton>
        <MoneyButton onClick={() => setMoney((state) => state + 100)}>
          S/100.00
        </MoneyButton>
        <MoneyButton onClick={() => setMoney((state) => state + 200)}>
          S/200.00
        </MoneyButton>
        <MoneyButton onClick={() => setMoney(totalMoneyOrder.current)}>
          Exacto
        </MoneyButton>
      </LayoutPayCardMoneyButtons>
      <LayoutPayCardMoneyText>
        <div>
          <b>
            <Text size="xl" $color="#00ff40">
              Paga con: S/{numeral(money || 0).format("0.00")}
            </Text>
          </b>
          <b>
            <Text size="xl" $color="#FE0000">
              Total compra: S/
              {numeral(totalMoneyOrder.current).format("0.00")}
            </Text>
          </b>
        </div>

        {money - totalMoneyOrder.current <= 0 || isNaN(money) ? (
          ""
        ) : (
          <b>
            <Text size="xxl" $color="yellow">
              Vuelto: S/
              {numeral(money - totalMoneyOrder.current).format("0.00")}
            </Text>
          </b>
        )}
      </LayoutPayCardMoneyText>
    </LayoutPayWithMoney>
  );
};
export default PayPopCash;
