import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
`;

export const Design = styled.div`
  width: 50vw;
  img {
    position: absolute;
    top: 20vh;
    margin: 1rem;
    height: 55vh;
  }
  /* border: 1px red solid; */
`;

export const Content = styled.div`
  /* border: 1px blue solid; */
  width: 50vw;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    width: 50%;
    margin: auto;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
`;

export const Header = styled.p`
  font-size: 1rem;
  margin: 2rem 0;
`;

export const SearchContainer = styled.div`
  background-color: #fff8e3;
`;

export const Legal = styled.div`
  max-height: 10vh;
  height: 10vh;
  display: flex;
  justify-content: center;
  a,
  span {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 400;
    margin: 0 0.5rem;
    opacity: 0.7;
    transition: opacity 0.12s ease-in-out;
    user-select: none;
    text-decoration: none;
    color: #424242;

    :hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

export const LoaderBackground = styled.div`
  z-index: 9998;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoaderContainer = styled.div`
  z-index: 9999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
