import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { FaBeer } from "react-icons/fa";
import styled from "styled-components";
import Slide1 from "./slides/slide1";
import Slide2 from "./slides/slide2";

const Footer = styled.div`
  display: flex;
`;

const Link = styled.a``;

const Summary = ({ userData }) => {
  const Slides = [Slide1, Slide2];
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleClick = () =>
    currentSlide < Slides.length ? setCurrentSlide(currentSlide + 1) : null;

  return Object.keys(userData).length > 0 ? (
    <div>
      {Slides.map((Val, index) => {
        if (index + 1 === currentSlide)
          return <Val userData={userData} key={index} />;
        else return null;
      })}

      <button onClick={handleClick}>
        <FaBeer size="50px" />
      </button>

      <Footer>
        <Link href="">LEGAL</Link>
        <Link>PRIVACY</Link>
        <Link>COOKIES</Link>
        <Link>LANGUAGE</Link>
      </Footer>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

Summary.propTypes = {
  userData: PropTypes.object.isRequired
};

export default Summary;
