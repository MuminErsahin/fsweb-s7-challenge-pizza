import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  background-color: #FAF7F2;
  @media (max-width: 768px) {
    min-height: 500px;
    padding-top: 10px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1320px;
  gap: 24.69px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 20px;
    background-color: #FAF7F2;
    border-radius: 12px;
    background-size: cover;
    background-position:center ;
  }
`;

export const LargeCard = styled.div`
  width: 636px;
  height: 535.75px;
  background-image: url('./public/Assets/mile2-aseets/cta/kart-1.png');
  background-size: cover;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 20px;
    background-color: #FAF7F2;
    border-radius: 12px;
    background-size: cover;
    background-position:center ;
  }
`;

export const MediumAndSmallCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24.69px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 20px;
    background-color: #FAF7F2;
    border-radius: 12px;
   
  }
`;

export const MediumCard = styled.div`
  width: 636px;
  height: 255.53px;
  background-image: url('./public/Assets/mile2-aseets/cta/kart-2.png');
  background-size: cover;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 20px;
    background-color: #FAF7F2;
    border-radius: 12px;
    background-size: cover;
    background-position:center ;
  }
`;

export const SmallCard = styled.div`
  width: 660px;
  height: 230px;
  background-image: url('./public/Assets/mile2-aseets/cta/kart-3.png');
  background-size: cover;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 20px;
    background-color: #FAF7F2;
    border-radius: 12px;
    background-size: cover;
    background-position:center ;
    
  }
`;

export const LargeTitle = styled.h2`
  font-size: 68px;
  color: #FFFFFF;
  font-family: "Quattrocento";
  margin-left: 20px;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 40px;
    margin-top: 0px;
  }
`;

export const MediumTitle = styled.h2`
  font-size: 32px;
  color: #FFFFFF;
  font-family: 'Barlow';
  margin-bottom: 15px;
  margin-left: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;

  }
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
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #FFFFFF;
  font-family: 'Barlow';
  line-height: 1.5;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.2;
    margin-bottom: 20px;
    margin-top: 0px;
    
  }
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
  @media (max-width: 768px) {
    font-size: 12px;
    width: 120px;
    height: 40px;
    padding: 3px 18px 0px 18px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-family: 'Barlow';
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 20px;
  }
`;

export const Yanyana = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MottoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #FAF7F2;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 20px;
    background-color: #FAF7F2;
    border-radius: 12px;
   
  }
`;

export const Italic = styled.h2`
  font-family: "Satisfy";
  font-size: 32px;
  color: #FDC913;
  font-weight: 16;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 10px;

  }
`;

export const Motto = styled.h1`
  color: black;
  font-size: 42px;
  font-family: 'Barlow';
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;

  }
`;