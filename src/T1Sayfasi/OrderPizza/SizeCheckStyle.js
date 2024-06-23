import styled from "styled-components";

export const SizeCheckContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Elemanlar arasında boşluk bırakmak için */
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding-right:100px;
`;

export const SectionLabel = styled.h2`
  font-family: "Barlow";
  font-size: 18px;
  margin-bottom: 10px; /* Label ile seçenekler arasındaki boşluk */
  display: flex;
  align-items: center;
  color: #5F5F5F;
`;

export const OptionsContainer = styled.div`
  display: flex;
  
`;

export const OptionButton = styled.button`
  font-family: "Barlow";
  font-size: 16px;
  padding: 10px 20px;
  margin-right: 10px;
  border: 2px solid #ffffff;
  border-radius:100%; /* Yuvarlak buton için */
  background-color: ${(props) => (props.selected ? '#FFEECC' : '#555454c')};
  color: #5F5F5F;
  cursor: pointer;
  outline: none;
  
`;

export const DropdownSelect = styled.select`
  font-family: "Barlow";
  font-size: 16px;
  padding: 8px;
  width: 283px;
  color: #5F5F5F;
  background: #FAF7F2;
  border: 2px solid transparent; /* Şeffaf çerçeve */
  border-radius: 12px; /* Köşeleri ovalleştirme */
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #5F5F5F; /* Odaklandığında çerçeve rengi */
  }
`;