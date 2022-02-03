import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  const { transactions } = useTransactions();

  const operations = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.incomes += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      incomes: 0,
      withdraws: 0,
      total: 0,
    }
  );

  function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(amount);
  }

  const formattedIncomes = formatCurrency(operations.incomes);
  const formattedWithdraws = formatCurrency(operations.withdraws);
  const formattedTotal = formatCurrency(operations.total);

  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>{formattedIncomes}</strong>
      </div>
      <div>
        <header>
          <p>Withdraws</p>
          <img src={outcomeImg} alt="outcome" />
        </header>
        <strong>{formattedWithdraws}</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>{formattedTotal}</strong>
      </div>
    </Container>
  );
}
