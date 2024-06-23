import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const Container = styled.div``;

export const HeaderContainer = styled.div`
  background-color: #ce2829; /* Başlık ve navigasyonun arka plan rengi kırmızı */
  padding-bottom: 25px;
  padding-top: 10px;
  text-align: center; /* İçeriği ortala */
`;

export const Title = styled.img`
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const NavContainer = styled.div`
  display: flex;
  align-content: flex-start;
  margin-top: 20px;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  flex-direction: row;
`;

export const NavAnasayfa = styled(Link)`
  color: #5f5f5f;
  text-decoration: none;

  margin: 0 10px;
  font-family: "Barlow";
`;

export const NavOzet = styled(Link)`
  color: #ce2829;
  text-decoration: none;
  font-size: 17px;
  font-family: "Barlow";
`;

export const ProductName = styled.h1`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 10px;
  font-family: "Barlow";
  font-size: 22px;
  margin-top: 10px;
  color: #5f5f5f;
`;
export const Onay = styled(Link)`
  background: #fdc913;
  color: black;
`;
export const PriceContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #faf7f2;
`;
export const Price = styled.h3`
  font-family: "Barlow";
  font-size: 28px;
  color: #5f5f5f;
  background: #faf7f2;
`;

export const Paragraph = styled.p`
  font-family: "Barlow";
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #5f5f5f;
  background: #faf7f2;
`;
export const Raiting = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: #faf7f2;
`;
export const Rait = styled.h5`
  padding-right: 40px;
  font-family: "Barlow";
  color: #5f5f5f;
  font-size: 16px;
  background: #faf7f2;
`;

export const HeadNavStyle = styled.div`
  background: #faf7f2;
`;

export const HeadImg = styled.img`
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;
`
