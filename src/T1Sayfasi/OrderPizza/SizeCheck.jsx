import React, { useState } from 'react';
import * as S from "./SizeCheckStyle.js"


const SizeCheck = ({setPastryValue , setSizeValue}) => {
  const [size, setSize] = useState(null);
  const [doughThickness, setDoughThickness] = useState('');

  const handleSizeChange = (value) => {
    setSize(value);
    setSizeValue(value)
  };

  const handleDoughThicknessChange = (event) => {
    setDoughThickness(event.target.value);
    setPastryValue(event.target.value)
  };

  return (
    
    <S.SizeCheckContainer>
      <S.Section>
        <S.SectionLabel>
          Boyut Seç <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
        </S.SectionLabel>
        <S.OptionsContainer>
          <S.OptionButton
            selected={size === 'S'}
            onClick={() => handleSizeChange('S')}
          >
            S
          </S.OptionButton>
          <S.OptionButton
            selected={size === 'M'}
            onClick={() => handleSizeChange('M')}
          >
            M
          </S.OptionButton>
          <S.OptionButton
            selected={size === 'L'}
            onClick={() => handleSizeChange('L')}
          >
            L
          </S.OptionButton>
        </S.OptionsContainer>
      </S.Section>

      <S.Section>
        <S.SectionLabel>
          Hamur Seç <span style={{ color: 'red' }}>*</span>
        </S.SectionLabel>
        <S.DropdownSelect
          value={doughThickness}
          onChange={handleDoughThicknessChange}
          required
        >
          <option value="">-Hamur Kalınlığı Seç-</option>
          <option value="Süpper İnce ">Süpper İnce</option>
          <option value="kalin">Kalın Hamur</option>
        </S.DropdownSelect>
      </S.Section>
    </S.SizeCheckContainer>
  );
};

export default SizeCheck;
