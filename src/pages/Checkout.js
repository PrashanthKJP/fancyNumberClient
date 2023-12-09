import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Loading from "../components/Loading";
import GradiantButton from "../HOC/GradiantButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../action/userAction";
import { useDispatch, useSelector } from "react-redux";
import Success from "../components/Success";
import Error from "../components/Error";
import dateFormat from "dateformat";
import { addOrder } from "../action/orderAction";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [number, setNumber] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const now = new Date();

  const registerState = useSelector((state) => state.registerUser);
  const { error, success, loading } = registerState;

  const { currentUser } = useSelector((state) => state.loginUser);
  const { cartItems } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      number,
      password,
    };
    dispatch(registerUser(data));

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  const notify = () => toast("Our client will contact within 24 Hour");

  const getCartItems = JSON.parse(localStorage.getItem("cartItems"));

  const handleConfirmClick = () => {
    notify();

    const data = {
      name: currentUser?.name,
      numbers: getCartItems.map((i) => i.number),
      phoneNumber: currentUser.number,
    };
    dispatch(addOrder(data));
    localStorage.removeItem("cartItems");
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  };

  useEffect(() => {}, [getCartItems]);

  return (
    <div style={{ backgroundColor: "#d6e3ffff", height: "100vh" }}>
      <Container fluid>
        <Row>
          <Col md={6} xs={12}>
            {currentUser === null && (
              <Container fluid>
                <Row>
                  <Col md={12}>
                    <Card
                      style={{
                        width: "auto",
                        boxShadow: "3px 2px #888888",
                        padding: "10px",
                        margin: "auto",
                        marginTop: "10vh",
                        maxWidth: "50rem",
                      }}
                    >
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Phone Number"
                            onChange={(e) => setNumber(e.target.value)}
                          />
                          <Form.Text className="text-muted">
                            We'll never share your phone number with anyone
                            else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="full name"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Link to="/login">Alredy have account</Link>
                        </Form.Group>
                        {success && (
                          <Success success="User Register Successfully" />
                        )}
                        {error && <Error error={error.response.data.message} />}
                        {loading && <Loading loading={loading} />}
                        <Button type="submit">submit</Button>
                      </Form>
                    </Card>
                  </Col>
                </Row>
              </Container>
            )}
          </Col>
          <Col md={6} xs={12}>
            {currentUser && (
              <Card>
                <Container style={{ padding: "2vw" }} fluid>
                  <div
                    style={{
                      color: "gray",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <span>To..</span>
                      <p>VIP FANCY NUMBER</p>
                    </div>
                    <div>
                      <span>
                        Date : {dateFormat(now, "dddd, mmmm dS, yyyy")}
                      </span>
                    </div>
                  </div>
                  <div style={{ color: "gray" }}>
                    <p style={{ fontSize: "10px" }}>
                      <div>
                        <h4>Selected Number</h4>
                      </div>
                      {cartItems &&
                        cartItems.map((item, i) => (
                          <h6 key={i}>{item.number}</h6>
                        ))}
                    </p>
                    <div
                      style={{
                        marginRight: "1vw",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "self-end",
                      }}
                    >
                      <div>
                        <span>Thanks & Regurd</span>
                        <p>{currentUser && currentUser.name}</p>
                      </div>
                      <div>
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={handleConfirmClick}
                        >
                          <GradiantButton text={"Confirm"} />
                        </div>
                        <ToastContainer />
                      </div>
                    </div>
                  </div>
                </Container>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
