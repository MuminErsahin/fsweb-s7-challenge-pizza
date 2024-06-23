import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  height: 350px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const QuantityButton = styled.button`
  background-color: #faf7f2;
  color: black;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
`;

export const QuantityDisplay = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: #faf7f2;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PriceDisplay = styled.p`
  font-size: 24px;
  margin-top: 10px;
`;

export const PieceDiv = styled.div`
  width: 386px;
  height: 197px;
  background: #faf7f2;
`;

export const ChoisedPrieceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const ChoisedPrieceLabel = styled.h2`
  color: ${({ PriceColor }) => (PriceColor ? "#CE2829" : "#5f5f5f")};
  font-size: 18px;
  margin-left: 30px;
  font-family: "Barlow";
`;

export const ChoisedPrieceValue = styled.h2`
  color: ${({ PriceColor }) => (PriceColor ? "#CE2829" : "#5f5f5f")};
  font-size: 18px;
  margin-right: 30px;
  margin-bottom:20px;
  font-family: "Barlow";
`;
export const LastOrderButton = styled.button`
  background-color: #fdc913;
  color: #292929;
  font-size: 18px;
  font-weight: bold;
  width: 386px;
  height: 62px;
  padding: 3px 18px 0px 18px;
  border: none;
  cursor: pointer;
  font-family: "Barlow";
  align-items: flex-end;
  
`;
export const ChoiseLabel = styled.h2`
  color: #292929;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom:30px;
  margin-left: 30px;
  font-family: "Barlow";
`;
