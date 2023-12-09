import React from "react";
import Carousel from "react-bootstrap/Carousel";
import useWindowSize from "../coustomHook/useWindowSize";
const Carousels = () => {
  const size = useWindowSize();
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
          alt="First slide"
          style={{
            height: `${size.width < 600 ? "20vh" : "40vh"}`,
            borderRadius: "5vh",
            padding: `${size.width < 600 ? 0 : 10}`,
          }}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0acauq_gTxMjSicB8QZq1k8r8mq8Q_wl9Oxph3uIh8qUXpxoKXfSem4Czh1VUL_pHxlo&usqp=CAU"
          alt="Second slide"
          style={{
            height: `${size.width < 600 ? "20vh" : "40vh"}`,
            borderRadius: "5vh",
            padding: `${size.width < 600 ? 0 : 10}`,
          }}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1"
          alt="Third slide"
          style={{
            height: `${size.width < 600 ? "20vh" : "40vh"}`,
            borderRadius: "5vh",
            padding: `${size.width < 600 ? 0 : 10}`,
          }}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
