import Modal from "react-modal";
import { Container } from "./styles";

import closeImg from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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

        <input type="text" placeholder="category" />

        <button type="submit">place</button>
      </Container>
    </Modal>
  );
}
