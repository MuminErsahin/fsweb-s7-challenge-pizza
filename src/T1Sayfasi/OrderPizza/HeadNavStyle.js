import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-right: 360px;
  margin-left: 360px;
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
`;

export const Icon = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 20px;
`;