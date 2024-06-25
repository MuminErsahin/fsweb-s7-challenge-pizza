import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #1a1a1a;
  color: white;
  height: 561.25px;
  font-family: "Barlow";
  @media (max-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterFirstDiv = styled.div`
  height: 471.45px;
  display: flex;
  @media (max-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterLastDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ffffff15;
  height: 89.8px;
  @media (max-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Copyright = styled.div`
  width: 1320px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Instagram = styled.div`
  width: 380px;
  
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: repeat(2, auto); 
  gap: 10px; 
  justify-content: center; 
  align-items: center;
  margin-top: 70px; 
  @media (max-width: 768px) {
   
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const InstagramDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const InstagramText = styled.p`
  line-height: 32.11px;
  font-size: 24px;
  margin-bottom: 60px; 
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.2;
    margin-bottom: 20px;
  }
`;

export const InstagramImage = styled.img`
  width: 94.5px;
  height: 94.5px;
  border-radius: 3px;
  margin-bottom: 10px; 
  margin-left:10px;
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    border-radius: 3px;
    
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 50px;
  @media  (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AddressSpan = styled.span`
  display: flex;
  gap: 5px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterMenu = styled.div`
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const FooterMenuItem = styled.p`
margin:8px;
@media (max-width: 768px) {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`