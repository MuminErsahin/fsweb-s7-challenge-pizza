import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #1a1a1a;
  color: white;
  height: 561.25px;
  font-family: "Barlow";
`;

export const FooterFirstDiv = styled.div`
  height: 471.45px;
  display: flex;
`;

export const FooterLastDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ffffff15;
  height: 89.8px;
`;

export const Copyright = styled.div`
  width: 1320px;
  display: flex;
  justify-content: space-between;
`;

export const Instagram = styled.div`
  width: 380px;
  
  grid-template-columns: repeat(3, 1fr); /* Üç eşit genişlikte sütunlar */
  grid-template-rows: repeat(2, auto); /* İki sıra */
  gap: 10px; /* Sütunlar ve satırlar arasındaki boşluk */
  justify-content: center; /* İçeriği yatay eksende ortala */
  align-items: center; /* İçeriği dikey eksende ortala */
  margin-top: 70px; /* Yukarıdan boşluk bırak */
`;

export const InstagramDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const InstagramText = styled.p`
  line-height: 32.11px;
  font-size: 24px;
  margin-bottom: 60px; /* Yazı altındaki boşluk */
`;

export const InstagramImage = styled.img`
  width: 94.5px;
  height: 94.5px;
  border-radius: 3px;
  margin-bottom: 10px; /* Fotoğraflar arasındaki boşluk */
  margin-left:10px;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 50px;
`;

export const AddressSpan = styled.span`
  display: flex;
  gap: 5px;
`;

export const FooterMenu = styled.div`
  margin-top: 50px;
`;
export const FooterMenuItem = styled.p`
margin:8px;
`