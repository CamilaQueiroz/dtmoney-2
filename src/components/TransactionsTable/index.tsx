import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
  formmatedPrice?: string;
  formmatedDate?: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => {
      const transactions = response.data.transactions as Transaction[];

      const formattedTransaction = transactions.map((transaction) => {
        return {
          ...transaction,
          formmatedPrice: new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(transaction.amount),
          formmatedDate: new Intl.DateTimeFormat("en-GB").format(
            new Date(transaction.createdAt)
          ),
        };
      });

      setTransactions(formattedTransaction);
    });
  }, []);

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
          {transactions.map((transaction: Transaction) => (
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
