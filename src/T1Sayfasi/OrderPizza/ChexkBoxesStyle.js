import styled from "styled-components";

export const CheckBoxesLabelDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 20px;
`;
export const CheckedBoxLabel = styled.h2`
  font-size: 20px;
  font-family: "Barlow";
  margin-bottom: 15px;
  color: #292929;
`;
export const CheckboxText = styled.p`
  font-size: 16px;
  color: #5f5f5f;
  font-family: "Barlow";
`;
export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 auto;
`;

export const LeftColumn = styled.div`
  flex: 1;
`;

export const MiddleColumn = styled.div`
  flex: 1;
`;

export const RightColumn = styled.div`
  flex: 1;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  font-family: "Barlow";
  font-size: 16px;
  color: #5f5f5f;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CustomCheckbox = styled.div`
  width: 38px;
  height: 38px;
  border: 2px solid #ccc;
  background-color: ${(props) => (props.checked ? "#fdc913" : "transparent")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  border-radius: 8px;
  font-weight: bold; /* Tik sembolünü kalın yapmak için */
`;

export const OptionText = styled.span`
  margin-left: 10px;
`;

export const TickSymbol = styled.span`
  font-size: 18px;
`;

export const InputDiv = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Notes = styled.h2`
  font-family: "Barlow";
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-right: 510px;
  margin-top:42px;
  margin-bottom:20px;
`;
export const NoteInput = styled.input`
  background: #faf7f2;
  width: 602px;
  height: 56px;
  border: 1px solid #ffffff;
  border-radius: 15px;
  padding: 10px;
  text-align: left; /* Adjust text alignment */
  margin-top: 10px; /* Adjust margin */
  line-height: 1.5; /* Adjust line height for vertical alignment */
`;

export const LineDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Line = styled.hr`
  width: 600px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

