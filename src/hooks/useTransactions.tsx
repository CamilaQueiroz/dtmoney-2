import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import { api } from "../services/api";

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

type TransactionInput = Omit<
  Transaction,
  "id" | "createdAt" | "formmatedPrice" | "formmatedDate"
>;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  function formatPriceAndDate(transactions: Transaction[]) {
    return transactions.map((transaction) => {
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
  }

  useEffect(() => {
    api.get("transactions").then((response) => {
      const transactions = response.data.transactions as Transaction[];

      const formattedTransaction = formatPriceAndDate(transactions);

      setTransactions(formattedTransaction);
    });
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    await api
      .post("transactions", { ...transaction, createdAt: new Date() })
      .then((response) => {
        const formattedData = {
          ...response.data.transaction,
          formmatedPrice: new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(response.data.transaction.amount),
          formmatedDate: new Intl.DateTimeFormat("en-GB").format(
            new Date(response.data.transaction.createdAt)
          ),
        };

        setTransactions([...transactions, formattedData]);
      });
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
