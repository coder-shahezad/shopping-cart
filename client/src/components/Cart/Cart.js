import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { plus, minus } from "../../assests";

const Cart = ({ show, handleClose }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let cartItems = localStorage.getItem("cartItems");
    cartItems = JSON.parse(cartItems) || [];
    setProducts(cartItems);
  }, []);

  const handleIncreamentProductCount = (product) => {
    const cartItems = [...products];
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      cartItems[index] = {
        ...product,
        productCount: cartItems[index].productCount + 1,
      };
    }
    setProducts(cartItems);
    localStorage.setItem("cartItems", cartItems);
  };

  const handleDecreamentProductCount = (product) => {
    if (product.productCount === 1) return;
    const cartItems = [...products];
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      cartItems[index] = {
        ...product,
        productCount: cartItems[index].productCount - 1,
      };
    }
    setProducts(cartItems);
    localStorage.setItem("cartItems", cartItems);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>My Cart ({products.length} item)</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light overflow-scroll">
        {products.map((product) => (
          <div className="row my-2 bg-white p-2 d-flex justify-content-center align-items-center">
            <div className="col-3">
              <img
                src={`http://localhost:3001/${product.imageURL}`}
                alt={product.name}
                width={100}
              />
            </div>
            <div className="col-7">
              <p>{product.name}</p>
              <div className="row text-center">
                <div className="col">
                  <img
                    src={plus}
                    alt="plus icon"
                    width={25}
                    onClick={() => handleIncreamentProductCount(product)}
                  />
                </div>
                <div className="col">{product.productCount}</div>
                <div className="col">
                  <img
                    src={minus}
                    alt="plus icon"
                    width={25}
                    onClick={() => handleDecreamentProductCount(product)}
                  />
                </div>
                <div className="col">X</div>
                <div className="col">Rs.{product.price}</div>
              </div>
            </div>
            <div className="col-2">
              Rs.{product.price * product.productCount}
            </div>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <p className="w-100">Promo code can be applied on payment page</p>
        <Button variant="danger" className="w-100" onClick={handleClose}>
          Proceed to Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
