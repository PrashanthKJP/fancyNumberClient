import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import GradiantButton from "../HOC/GradiantButton";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../action/cartAction";

const Cart = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();

  const subTotal = cartItems.reduce(
    (accumulator, currentValue) =>
      Number(accumulator) + Number(currentValue.price),
    0
  );

  return (
    <div style={{ backgroundColor: "#d6e3ffff", height: "100vh" }}>
      <Container fluid>
        <Row>
          <Col md={6}>
            <h1>My Cart</h1>
            <Row>
              {cartState.cartItems &&
                cartState.cartItems.map((item, index) => (
                  <>
                    <Col md={6} xs={8} key={index}>
                      <h5>Fancy Number : {item.number}</h5>
                      <h6>Price : {item.price} /-</h6>
                      <h6>status : Avalaible </h6>
                    </Col>
                    <Col md={4} xs={4}>
                      <FaTrash
                        className="text-danger"
                        style={{ cursor: "pointer", marginLeft: "15vw" }}
                        onClick={() => {
                          dispatch(deleteFromCart(item));
                        }}
                      />
                    </Col>
                    <hr />
                  </>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Payment Info</h1>
            <h4>Sub Total </h4>
            <h4>RS : {subTotal} /-</h4>
            {cartItems && cartItems.length > 0 && (
              <Link to="/checkout">
                <GradiantButton text={"Checkout"} />
              </Link>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
