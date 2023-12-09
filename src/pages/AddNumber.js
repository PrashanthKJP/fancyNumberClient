import React, { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addNumber } from "../action/numberAction";
import Loading from "../components/Loading";

const AddNumber = () => {
  const [number, setNumber] = useState(null);
  const [newPrice, setNewPrice] = useState(null);
  const [oldPrice, setOldPrice] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.loginUser);
  const addNumberState = useSelector((state) => state.addNumberReducer);
  const { loading } = addNumberState;

  const getHandleChangeCheckedValue = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      setSelectedCategory((pre) => [...pre, name]);
    } else {
      setSelectedCategory((pre) => {
        return [...pre.filter((item) => item !== name)];
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // total Sum logic
    const total = number.split("");
    var strToNum = total.map((str) => parseInt(str));
    const oneTimeSum = strToNum.reduce(
      (previousScore, currentScore, index) => previousScore + currentScore,
      0
    );

    // Second time sum + once again sum
    const numberToStr = oneTimeSum.toString().split("");
    var strToNum1 = numberToStr.map((str) => parseInt(str));
    const secondTimeSum = strToNum1.reduce(
      (previousScore, currentScore, index) => previousScore + currentScore,
      0
    );

    // Thrid time sum + once again sum
    const numberToStr1 = secondTimeSum.toString().split("");
    if (numberToStr1.length > 1) {
      var strToNum2 = numberToStr1.map((str) => parseInt(str));
      var thridTimeSum = strToNum2.reduce(
        (previousScore, currentScore, index) => previousScore + currentScore,
        0
      );
    }
    const data = {
      number,
      newPrice,
      oldPrice,
      oneTimeSum,
      secondTimeSum,
      thridTimeSum,
      currentUserId: currentUser._id,
      category: selectedCategory,
    };
    dispatch(addNumber(data));
  };

  useEffect(() => {}, [selectedCategory, dispatch]);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12} xs={11} style={{ margin: "auto" }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>New Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Amount"
                  onChange={(e) => setNewPrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Old Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Amount"
                  onChange={(e) => setOldPrice(e.target.value)}
                />
              </Form.Group>
              <div
                className="scrollBar"
                style={{
                  margin: "1vw 0vw",
                  fontSize: "1.2vh",
                }}
              >
                <Row>
                  <Col md={3} xs={3}>
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`WITHOUT 2,4 & 8`}
                      onChange={getHandleChangeCheckedValue}
                      name={`WITHOUT 2,4 & 8`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`HIGH RANGE NUMBER`}
                      onChange={getHandleChangeCheckedValue}
                      name={`HIGH RANGE NUMBER`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`MIRROR NUMBER`}
                      onChange={getHandleChangeCheckedValue}
                      name={`MIRROR NUMBER`}
                    />
                    <Form.Check // prettier-ignore 2
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`XXX-YYY`}
                      onChange={getHandleChangeCheckedValue}
                      name={`XXX-YYY`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`ABCD-ABCD`}
                      onChange={getHandleChangeCheckedValue}
                      name={`ABCD-ABCD`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`786 SPECIAL`}
                      onChange={getHandleChangeCheckedValue}
                      name={`786 SPECIAL`}
                    />
                    <Form.Check // prettier-ignore 3
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`00X00 & 00XY00`}
                      onChange={getHandleChangeCheckedValue}
                      name={`00X00 & 00XY00`}
                    />
                    <Form.Check // prettier-ignore 2
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`ENDING HEXA`}
                      onChange={getHandleChangeCheckedValue}
                      name={`ENDING HEXA`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`MIDDLE HEXA`}
                      onChange={getHandleChangeCheckedValue}
                      name={`MIDDLE HEXA`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`ENDING PENTA`}
                      onChange={getHandleChangeCheckedValue}
                      name={`ENDING PENTA`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`ENDING 000XY`}
                      onChange={getHandleChangeCheckedValue}
                      name={`ENDING 000XY`}
                    />
                  </Col>
                  <Col md={3} xs={3}>
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`SEMI-MIRROR NUMBER`}
                      onChange={getHandleChangeCheckedValue}
                      name={`SEMI-MIRROR NUMBER`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`XY-XY-XY-XY`}
                      onChange={getHandleChangeCheckedValue}
                      name={`XY-XY-XY-XY`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`SYMMETRY NUMBER`}
                      onChange={getHandleChangeCheckedValue}
                      name={`SYMMETRY NUMBER`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`XYXY-ABAB`}
                      onChange={getHandleChangeCheckedValue}
                      name={`XYXY-ABAB`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`3 DIGIT NUMBER`}
                      onChange={getHandleChangeCheckedValue}
                      name={`3 DIGIT NUMBER`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`2 DIGIT NUMBER`}
                    />
                    <Form.Check // prettier-ignore 3
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`MIDDLE PENTA`}
                      onChange={getHandleChangeCheckedValue}
                      name={`MIDDLE PENTA`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`ENDING TETRA`}
                      onChange={getHandleChangeCheckedValue}
                      name={`ENDING TETRA`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`MIDDLE TETRA`}
                      onChange={getHandleChangeCheckedValue}
                      name={`MIDDLE TETRA`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`ENDING XXX`}
                      onChange={getHandleChangeCheckedValue}
                      name={`ENDING XXX`}
                    />
                  </Col>
                  <Col md={3} xs={3}>
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`FANCY NUMBER`}
                      onChange={getHandleChangeCheckedValue}
                      name={`FANCY NUMBER`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`LOW COST NUMBERS`}
                      onChange={getHandleChangeCheckedValue}
                      name={`LOW COST NUMBERS`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`DOUBLING NUMBER`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`ENDING XYZ-XYZ`}
                      onChange={getHandleChangeCheckedValue}
                      name={`ENDING XYZ-XYZ`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`SPECIAL DIGIT NUMBER`}
                      onChange={getHandleChangeCheckedValue}
                      name={`SPECIAL DIGIT NUMBER`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`XY-XY`}
                      onChange={getHandleChangeCheckedValue}
                      name={`XY-XY`}
                    />
                    <Form.Check // prettier-ignore 3
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`000000 NUMBERS`}
                      onChange={getHandleChangeCheckedValue}
                      name={`000000 NUMBERS`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`00000 NUMBERS`}
                      onChange={getHandleChangeCheckedValue}
                      name={`00000 NUMBERS`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`ENDING 0000`}
                      onChange={getHandleChangeCheckedValue}
                      name={`ENDING 0000`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`ENDING 0000X`}
                      onChange={getHandleChangeCheckedValue}
                      name={`ENDING 0000X`}
                    />
                  </Col>
                  <Col md={3} xs={3}>
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`ENDING XY-XY-XY`}
                      onChange={getHandleChangeCheckedValue}
                      name={`ENDING XY-XY-XY`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`MIDDLE XY-XY-XY`}
                      onChange={getHandleChangeCheckedValue}
                      name={`MIDDLE XY-XY-XY`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`STARTING XY-XY-XY`}
                      onChange={getHandleChangeCheckedValue}
                      name={`STARTING XY-XY-XY`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`ABCD-XY-ABCD`}
                      onChange={getHandleChangeCheckedValue}
                      name={`ABCD-XY-ABCD`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`COUNTING NUMBER`}
                      onChange={getHandleChangeCheckedValue}
                      name={`COUNTING NUMBER`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`STARTING XYZ-XYZ`}
                      onChange={getHandleChangeCheckedValue}
                      name={`STARTING XYZ-XYZ`}
                    />
                    <Form.Check // prettier-ignore 3
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`ENDING 0000XY`}
                      onChange={getHandleChangeCheckedValue}
                      name={`ENDING 0000XY`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`MIDDLE 0000`}
                      onChange={getHandleChangeCheckedValue}
                      name={`MIDDLE 0000`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`ENDING 000`}
                      onChange={getHandleChangeCheckedValue}
                      name={`ENDING 000`}
                    />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`default-${"checkbox"}`}
                      label={`ENDING 000X`}
                      onChange={getHandleChangeCheckedValue}
                      name={`ENDING 000X`}
                    />
                  </Col>
                </Row>
              </div>
              {loading && <Loading loading={loading} />}

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddNumber;
