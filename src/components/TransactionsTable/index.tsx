import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((res) => console.log(res));
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12000</td>
            <td>Web</td>
            <td>23/02/1997</td>
          </tr>
          <tr>
            <td>Parcela casa</td>
            <td className="withdraw">- R$ 2000</td>
            <td>Casa</td>
            <td>23/02/1997</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
