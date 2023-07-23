import * as React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Cart = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>My Cart (1 item)</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" className="w-100" onClick={handleClose}>
          Proceed to Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
