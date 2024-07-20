import React, { useState, useEffect } from "react";
import * as S from "./ChexkBoxesStyle.js";

function CheckBoxes({
  validation,
  setValidation,
  checkedItems,
  setCheckedItems,
  setCheckTotalPrice,
  setChoiseValue,
}) {
  const [error, setError] = useState("");
  const [checkedCount, setCheckedCount] = useState(0); // State to track number of checked checkboxes

  const options = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
  ];

  useEffect(() => {
    
    setValidation(checkedCount);
    console.log("validation", validation);
  }, [checkedCount, setValidation]);

  const handleCheckboxChange = (option) => {
    const newCheckedItems = { ...checkedItems };
    newCheckedItems[option] = !newCheckedItems[option];
    setCheckedItems(newCheckedItems);
    setChoiseValue(
      Object.keys(newCheckedItems).filter((option) => newCheckedItems[option])
    );
    validateSelection(newCheckedItems); 
   
  };

  const validateSelection = (items) => {
    const minSelectionCount = 4;
    const maxSelectionCount = 10;
    const selectedCount = Object.values(items).filter((item) => item).length;

    setCheckedCount(selectedCount); // Update checkedCount state

    if (selectedCount < minSelectionCount) {
      setError(`En az ${minSelectionCount} malzeme seçmelisiniz.`);
    } else if (selectedCount > maxSelectionCount) {
      setError(`En fazla ${maxSelectionCount} malzeme seçebilirsiniz.`);
    } else {
      setError("");
    }
  };

  // Calculate total price based on selected checkboxes
  const calculateTotalPrice = (items) => {
    const pricePerCheckbox = 5;
    let totalPrice = 0;

    for (let option in items) {
      if (items[option]) {
        totalPrice += pricePerCheckbox;
      }
    }

    setCheckTotalPrice(totalPrice);
    return totalPrice;
  };

  // Divide options into three columns
  const optionsPerColumn = Math.ceil(options.length / 3);
  const leftColumnOptions = options.slice(0, optionsPerColumn);
  const middleColumnOptions = options.slice(
    optionsPerColumn,
    2 * optionsPerColumn
  );
  const rightColumnOptions = options.slice(2 * optionsPerColumn);

  return (
    <div>
      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
      )}
      <S.CheckBoxesLabelDiv>
        <S.CheckedBoxLabel>Ek Malzemeler</S.CheckedBoxLabel>
        <S.CheckboxText>En Fazla 10 malzeme seçebilirsiniz. 5₺</S.CheckboxText>
      </S.CheckBoxesLabelDiv>
      <S.CheckboxContainer>
        <S.LeftColumn>
          {leftColumnOptions.map((option, index) => (
            <S.CheckboxLabel key={index}>
              <S.CheckboxInput
                type="checkbox"
                value={option}
                checked={checkedItems[option] || false}
                onChange={() => handleCheckboxChange(option)}
              />
              <S.CustomCheckbox checked={checkedItems[option]}>
                {checkedItems[option] && <S.TickSymbol>&#10003;</S.TickSymbol>}
              </S.CustomCheckbox>
              <S.OptionText>{option}</S.OptionText>
            </S.CheckboxLabel>
          ))}
        </S.LeftColumn>
        <S.MiddleColumn>
          {middleColumnOptions.map((option, index) => (
            <S.CheckboxLabel key={index}>
              <S.CheckboxInput
                type="checkbox"
                value={option}
                checked={checkedItems[option] || false}
                onChange={() => handleCheckboxChange(option)}
              />
              <S.CustomCheckbox checked={checkedItems[option]}>
                {checkedItems[option] && <S.TickSymbol>&#10003;</S.TickSymbol>}
              </S.CustomCheckbox>
              <S.OptionText>{option}</S.OptionText>
            </S.CheckboxLabel>
          ))}
        </S.MiddleColumn>
        <S.RightColumn>
          {rightColumnOptions.map((option, index) => (
            <S.CheckboxLabel key={index}>
              <S.CheckboxInput
                type="checkbox"
                value={option}
                checked={checkedItems[option] || false}
                onChange={() => handleCheckboxChange(option)}
              />
              <S.CustomCheckbox checked={checkedItems[option]}>
                {checkedItems[option] && <S.TickSymbol>&#10003;</S.TickSymbol>}
              </S.CustomCheckbox>
              <S.OptionText>{option}</S.OptionText>
            </S.CheckboxLabel>
          ))}
        </S.RightColumn>
      </S.CheckboxContainer>
      <S.InputDiv>
        <S.Notes>Sipariş Notu</S.Notes>
        <S.NoteInput
          type="text"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
        />
      </S.InputDiv>
    </div>
  );
}

export default CheckBoxes;
