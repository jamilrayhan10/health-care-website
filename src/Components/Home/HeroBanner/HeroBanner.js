import React from "react";
import "./HeroBanner.css";
import { Carousel } from "react-bootstrap";
import slider1 from "../../images/sliderImg/slider1.jpg";
import slider2 from "../../images/sliderImg/slider2.jpg";
import slider3 from "../../images/sliderImg/slider3.jpg";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 sliderimg"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Baby Health care</h3>
            <p>
              Find out how to clean baby eyes, ears, teeth, umbilical cords and
              genitals in our illustrated guide to hygiene and daily care for
              newborns and babies.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 sliderimg"
            src={slider2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Old Health care</h3>
            <p>
              A healthy diet can help men over age 50 reduce their risk of heart
              disease, type 2 diabetes, obesity and some types of cancer.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 sliderimg"
            src={slider3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Health care</h3>
            <p>
              Image result for What is primary health care Primary health care
              is the first point of contact for health care for most people.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
