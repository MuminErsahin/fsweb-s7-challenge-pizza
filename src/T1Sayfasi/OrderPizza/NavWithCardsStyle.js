import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #faf7f2;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const NavItem = styled.div`
  position: relative;
  cursor: pointer;
  margin: 0 10px;
  padding: 10px;
  font-family: "Barlow", sans-serif;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  border-radius: 50px;
  background-color: ${({ isActive }) => (isActive ? "#292929" : "#FFFFFF")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 201px;
  height: 60px;
`;

export const Icon = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 380px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px 12px 0 0;
`;

export const Title = styled.h3`
  margin: 10px 0;
  font-family: "Barlow";
  color: black;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.p`
  font-weight: bold;
  font-family: "Barlow";
  color: black;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-family: "Barlow";
  color: black;
`;