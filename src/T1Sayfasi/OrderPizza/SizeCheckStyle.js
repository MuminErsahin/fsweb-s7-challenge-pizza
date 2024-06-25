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

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 100px;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;

    border-radius: 12px;
  }
`;

export const SectionLabel = styled.h2`
  font-family: "Barlow";
  font-size: 18px;
  margin-bottom: 10px; /* Label ile seçenekler arasındaki boşluk */
  display: flex;
  align-items: center;
  color: #5f5f5f;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;

    border-radius: 12px;
    background-size: cover;
    background-position: center;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const OptionButton = styled.button`
  font-family: "Barlow";
  font-size: 16px;
  padding: 10px 20px;
  margin-right: 10px;
  border: 2px solid #ffffff;
  border-radius: 100%; /* Yuvarlak buton için */
  background-color: ${(props) => (props.selected ? "#FFEECC" : "#555454c")};
  color: #5f5f5f;
  cursor: pointer;
  outline: none;
`;

export const DropdownSelect = styled.select`
  font-family: "Barlow";
  font-size: 16px;
  padding: 8px;
  width: 283px;
  color: #5f5f5f;
  background: #faf7f2;
  border: 2px solid transparent; /* Şeffaf çerçeve */
  border-radius: 12px; /* Köşeleri ovalleştirme */
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #5f5f5f; /* Odaklandığında çerçeve rengi */
  }
`;
