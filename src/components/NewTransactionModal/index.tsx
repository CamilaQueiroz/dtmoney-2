import { useState } from "react";
import Modal from "react-modal";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import closeImg from "../../assets/close.svg";
import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="close modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="title" />

        <input type="number" placeholder="price" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("income")}
            isActive={type === "income"}
            activeColor="green"
          >
            <img src={incomeImg} alt="incomes" />
            <span>Incomes</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="outcomes" />
            <span>Withdraws</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="category" />

        <button type="submit">place</button>
      </Container>
    </Modal>
  );
}
