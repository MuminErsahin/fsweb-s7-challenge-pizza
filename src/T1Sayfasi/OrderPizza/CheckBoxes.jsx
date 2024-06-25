import React, { useState } from 'react';
import * as S from "./ChexkBoxesStyle.js";

function CheckBoxes({ setAllValue, allValue, checkedItems, setCheckedItems, setCheckTotalPrice, setChoiseValue }) {
  const [error, setError] = useState('');

  const options = [
    'Pepperoni', 'Tavuk Izgara', 'Mısır', 'Sarımsak',
    'Ananas', 'Sosis', 'Soğan', 'Sucuk',
    'Biber', 'Kabak', 'Kanada Jambonu', 'Domates',
    'Jalepeno'
  ];

  const handleCheckboxChange = (option) => {
    const newCheckedItems = { ...checkedItems };
    newCheckedItems[option] = !newCheckedItems[option];
    setCheckedItems(newCheckedItems);
    setChoiseValue(Object.keys(newCheckedItems).filter(option => newCheckedItems[option]));
    calculateTotalPrice(newCheckedItems); // Checkbox değişikliğinde fiyatı tekrar hesapla
    validateSelection(newCheckedItems); // Seçim validasyonunu çağır
  };

  const validateSelection = (items) => {
    const minSelectionCount = 4;
    const selectedCount = Object.values(items).filter(item => item).length;

    if (selectedCount < minSelectionCount) {
      setError(`En az ${minSelectionCount} malzeme seçmelisiniz.`);
    } else {
      setError('');
    }
  };

  const calculateTotalPrice = (items) => {
    const pricePerCheckbox = 5;
    let totalPrice = 0;

    for (let option in items) {
      if (items[option]) {
        totalPrice += pricePerCheckbox;
      }
    }

    setCheckTotalPrice(totalPrice);
    console.log(checkedItems);
    return totalPrice;
  };

  // Checkboxları sütunlara grupladım
  const optionsPerColumn = Math.ceil(options.length / 3);
  const leftColumnOptions = options.slice(0, optionsPerColumn);
  const middleColumnOptions = options.slice(optionsPerColumn, 2 * optionsPerColumn);
  const rightColumnOptions = options.slice(2 * optionsPerColumn);

  return (
    <div>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <S.CheckBoxesLabelDiv>
        <S.CheckedBoxLabel>Ek Malzemeler</S.CheckedBoxLabel>
        <S.CheckboxText>En Fazla 10 malzeme seçebilirsiniz.5₺</S.CheckboxText>
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
        
        <S.Line></S.Line>
      </S.InputDiv>
    </div>
  );
}

export default CheckBoxes;