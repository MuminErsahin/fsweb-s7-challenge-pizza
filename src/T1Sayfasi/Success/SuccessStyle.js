import styled from "styled-components";

export const Sarma = styled.div`
  background: #ce2829;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    font-size: 14px; 
    margin-bottom: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
  }
`;

export const Title = styled.img`
  max-width: 80%; /* Maksimum genişlik */
  max-height: 80%; /* Maksimum yükseklik */
  margin-top: 90px;
`;
export const Mesage = styled.h1`
  font-size: 86px;
  font-family: "Roboto Condensed";
  color: white;
  line-height: 92px;
  font-weight: 300;
  margin-top: 15px;
  @media (max-width: 768px) {
    font-size: 54px;
    margin-top: 10px;
    padding: 10px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
  }
`;
export const SucHeader = styled.div`
  background: #ce2829;
  display: flex;
  justify-content: center; /* İçeriği yatayda ortala */
  align-items: center; /* İçeriği dikeyde ortala */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Italic = styled.h2`
  font-family: "Satisfy";
  font-size: 32px;
  color: #fdc913;
  font-weight: 16;
  margin-top: 40px;
`;
export const Line = styled.hr`
  width: 550px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #faf7f2;
  background: #ce2829;
`;
export const ProductLabel = styled.h2`
  font-size: 22px;
  font-family: "Barlow";
  color: #ffffff;
  margin-top: 20px;
`;
export const ExplationDiv = styled.div`
  width: 201px;
  height: 153px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
  margin: 0 auto;
  background: #ce2829;
  padding-top: 70px;
`;
export const LabelExplanation = styled.h2`
  font-size: 16px;
  font-family: "Barlow";
  color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const LabelExplanationValue = styled.h2`
  font-size: 18px;
  font-family: "Barlow";
  color: #ffffff;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1px;
`;
export const AtomicDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  
`;
export const PriceBordersDiv = styled.div`
  border: 1px solid #ffffff;
  border-radius: 6px;
  width: 288px;
  height: 191px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
  margin: 0 auto;
  padding-left: 25px;
  margin-top: 60px;
`;
export const ColorDiv = styled.div`
width:100px;
height:100px;
background:#ce2829;
`
export const ChoiseOrder = styled.h2`
font-size: 18px;
  font-family: "Barlow";
  color: #ffffff;
  ;
`
export const OrderValue1 = styled.h2`
  font-size: 18px;
  font-family: "Barlow";
  color: #ffffff;
`
export const ChoiseOrder2 = styled.h2`
font-size: 18px;
  font-family: "Barlow";
  color: #ffffff;
  ;
`
export const OrderValue2 = styled.h2`
  font-size: 18px;
  font-family: "Barlow";
  color: #ffffff;
`

export const OrderValueDiv1 =styled.div`
display: flex;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: space-between;
`