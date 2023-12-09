import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { addToCart } from "../action/cartAction";
import useWindowSize from "../coustomHook/useWindowSize";
import DemoCard from "./DemoCard";

const AdvanceSerchFancyNumber = () => {
  const dispatch = useDispatch();
  const advanceState = useSelector((state) => state.advanceNumberReducer);
  const { advanceNumbers, loading, error } = advanceState;

  const addToCarthandler = (item) => {
    dispatch(addToCart(item.newPrice, item.number, item.oldPrice, item._id));
    // notify();
  };

  const size = useWindowSize();

  return (
    <div style={{ backgroundColor: "#d6e3ffff" }}>
      <Container fluid>
        <Row>
          <Col md={12}>
            {size.width < 600 ? (
              <div
                className="scrollBar"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100vw",
                }}
              >
                {error && <Error error="Error While Fetching Number" />}
                {(loading && <Loading loading={loading} />) ||
                  (advanceNumbers &&
                    advanceNumbers.map((item, index) => (
                      <div key={index}>
                        <DemoCard
                          item={item}
                          actions={() => addToCarthandler(item)}
                        />
                      </div>
                    )))}
              </div>
            ) : (
              <div
                className="scrollBar"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                {error && <Error error="Error While Fetching Number" />}

                {(loading && <Loading loading={loading} />) ||
                  (advanceNumbers &&
                    advanceNumbers.map((item, index) => (
                      <div key={index}>
                        <DemoCard
                          item={item}
                          actions={() => addToCarthandler(item)}
                        />
                      </div>
                    )))}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdvanceSerchFancyNumber;
