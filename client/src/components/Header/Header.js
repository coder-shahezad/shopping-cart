import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { logo, logo2x, cart } from "../../assests";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Cart from "../Cart/Cart";

const Header = () => {
  const [cartModal, setCartModal] = useState(false);
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const handleCartModal = () => {
    setCartModal((prevState) => !prevState);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo2x} alt="shopping-cart" width={150} />
          </Navbar.Brand>
          {isTablet && (
            <Button
              variant="outline-primary"
              className="me-3 d-flex flex-row justify-content-between align-items-center"
            >
              <img src={cart} alt="cart" className="me-2" width={25} />0 items
            </Button>
          )}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" className="text-secondary text-decoration-none">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/products"
                  className="text-secondary text-decoration-none"
                >
                  Products
                </Link>
              </Nav.Link>
            </Nav>
            {!isTablet && (
              <Button
                variant="outline-primary"
                className="me-3 d-flex flex-row justify-content-between align-items-center"
                onClick={handleCartModal}
              >
                <img src={cart} alt="cart" className="me-2" width={25} />0 items
              </Button>
            )}
            <Nav>
              <Nav.Link>
                <Link
                  to="/login"
                  className="text-secondary text-decoration-none"
                >
                  SignIn
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/register"
                  className="text-secondary text-decoration-none"
                >
                  Register
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {cartModal && <Cart show={cartModal} handleClose={handleCartModal} />}
    </>
  );
};

export default Header;
