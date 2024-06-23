import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  background-color: #FAF7F2;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1320px;
  gap: 24.69px;
`;

export const LargeCard = styled.div`
  width: 636px;
  height: 535.75px;
  background-image: url('./Assets/mile2-aseets/cta/kart-1.png');
  background-size: cover;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const MediumAndSmallCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24.69px;
`;

export const MediumCard = styled.div`
  width: 636px;
  height: 255.53px;
  background-image: url('./Assets/mile2-aseets/cta/kart-2.png');
  background-size: cover;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const SmallCard = styled.div`
  width: 660px;
  height: 230px;
  background-image: url('./Assets/mile2-aseets/cta/kart-3.png');
  background-size: cover;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const LargeTitle = styled.h2`
  font-size: 68px;
  color: #FFFFFF;
  font-family: "Quattrocento";
  margin-left: 20px;
  margin-top: 20px;
`;

export const MediumTitle = styled.h2`
  font-size: 32px;
  color: #FFFFFF;
  font-family: 'Barlow';
  margin-bottom: 15px;
  margin-left: 20px;
`;

export const SmallTitle = styled.h2`
  font-size: 32px;
  font-family: 'Barlow';
  color: ${({ highlightsRed}) => (highlightsRed? '#FF0000' : 'black')};
  display: block;
  margin: 3px;
  margin-bottom: 15px;
  margin-left: 20px;
  margin-top: 15px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #FFFFFF;
  font-family: 'Barlow';
  line-height: 1.5;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 20px;
`;

export const OrderButton = styled.button`
  background-color: #ffffff;
  color: #CE2829;
  font-size: 14px;
  font-weight: bold;
  width: 170px;
  height: 48px;
  padding: 3px 18px 0px 18px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: 'Barlow';
  align-self: flex-start;
  margin-left: 20px;
  margin-top: 20px;
`;

export const Yanyana = styled.div`
  display: flex;
`;

export const MottoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #FAF7F2;
  gap: 20px;
`;

export const Italic = styled.h2`
  font-family: "Satisfy";
  font-size: 32px;
  color: #FDC913;
  font-weight: 16;
  margin-top: 20px;
`;

export const Motto = styled.h1`
  color: black;
  font-size: 42px;
  font-family: 'Barlow';
  font-weight: 600;
`;