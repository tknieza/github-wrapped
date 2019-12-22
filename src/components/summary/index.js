import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import styled from "styled-components";
import Slide1 from "./slides/slide1";
import Slide2 from "./slides/slide2";

const Header = styled.div`
  display: flex;
`;

const Footer = styled.div`
  display: flex;
`;

const Link = styled.a``;

export default withRouter(({ userData, nextSlide, currentSlide }) => {
  const Slides = [Slide1, Slide2];

  return Object.keys(userData).length > 0 ? (
    <div>
      <Header></Header>
      {Slides.map((Val, index) => {
        if (index + 1 === currentSlide)
          return <Val userData={userData} key={index} />;
      })}

      <button onClick={nextSlide}>
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
});
