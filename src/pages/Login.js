import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import GradiantButton from "../HOC/GradiantButton";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../action/userAction";
import Success from "../components/Success";
import Error from "../components/Error";
import Loading from "../components/Loading";

const Login = () => {
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const loginUserReducer = useSelector((state) => state.loginUser);
  const { error, success, loading } = loginUserReducer;

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      number,
      password,
    };
    dispatch(loginUser(user));
  };
  return (
    <div style={{ backgroundColor: "#d6e3ffff", height: "100vh" }}>
      <Container fluid>
        <Row>
          <Col md={12}>
            <Card
              style={{
                width: "auto",
                maxWidth: "50rem",
                boxShadow: "3px 2px #888888",
                padding: "10px",
                margin: "auto",
                marginTop: "10vh",
              }}
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Phone Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your phone number with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Link to="/register">Don't have account</Link>
                </Form.Group>
                {success && <Success success="User Register Successfully" />}
                {error && <Error error={error.response.data.message} />}
                {loading && <Loading loading={loading} />}

                <GradiantButton text={"Submit"} type={"submit"} />
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
