import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContenxt";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.formmatedPrice}</td>
              <td>{transaction.category}</td>
              <td>{transaction.formmatedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
