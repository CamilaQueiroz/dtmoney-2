import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface TransactionModalState {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: TransactionModalState) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo dtmoney" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
