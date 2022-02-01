import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Withdraws</p>
          <img src={outcomeImg} alt="outcome" />
        </header>
        <strong>R$ -500,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}
