import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";


export const Container = styled.div`
  background: url("./Assets/mile2-aseets/home-bg.png");
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media  (max-width: 768px) {
   width: 100vw;
   height: 100vh;
    background-size: cover;
    background-position:center ;
  }
`;

export const Title = styled.img`
  margin-bottom: 10px;
  @media  (max-width: 768px) {
    width: 300px;
  }
`;

export const Motto = styled.h1`
  color: white;
  font-size: 86px;
  font-family: "Roboto Condensed";
  font-weight: 300;
  margin-top: 5px;
  margin-bottom: 5px;
  @media  (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Button = styled(Link)`
  background-color: #fdc913;
  color: black;
  width: 193.27px;
  height: 56px;
  border-radius: 50px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 350px;
  margin-top: 20px;
  font-size: 18px;
  font-family: "Barlow";
  font-weight: 600;
  @media  (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Italic = styled.h2`
  font-family: "Satisfy";
  font-size: 32px;
  color: #fdc913;
  font-weight: 16;
  @media  (max-width: 768px) {
    font-size: 20px;
  }
`;

