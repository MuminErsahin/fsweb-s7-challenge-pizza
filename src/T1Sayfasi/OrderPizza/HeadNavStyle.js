import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-right: 360px;
  margin-left: 360px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
  }
`;

export const NavItem = styled.div`
  cursor: pointer;
  padding: 10px;
  font-family: 'Barlow', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 201px;
  height: 70px;
  color:black;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const Icon = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;