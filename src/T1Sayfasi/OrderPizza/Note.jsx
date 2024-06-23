import React, { useState } from 'react';
import * as S from "./NoteStyle.js"
import { Link } from 'react-router-dom/cjs/react-router-dom.min.js';





const Note = ({checkTotalPrice,setTotalPriceValue}) => {
  const [quantity, setQuantity] = useState(1);

  const price = 85.50;

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const totalPrice = (price * quantity) + checkTotalPrice;
  setTotalPriceValue(totalPrice)
    
  
  return (
    <S.Container>
      <S.QuantityContainer>
        <S.QuantityButton onClick={handleDecrement}>-</S.QuantityButton>
        <S.QuantityDisplay>{quantity}</S.QuantityDisplay>
        <S.QuantityButton onClick={handleIncrement}>+</S.QuantityButton>
      </S.QuantityContainer>
      <S.PieceDiv>
        <S.ChoiseLabel>Sipariş Toplamı</S.ChoiseLabel>
        <S.ChoisedPrieceContainer>
          <S.ChoisedPrieceLabel>Seçimler</S.ChoisedPrieceLabel>
          <S.ChoisedPrieceValue>{checkTotalPrice}₺</S.ChoisedPrieceValue>
        </S.ChoisedPrieceContainer>
        <S.ChoisedPrieceContainer>
          <S.ChoisedPrieceLabel PriceColor >Toplam Fiyat</S.ChoisedPrieceLabel>
          <S.ChoisedPrieceValue PriceColor >{totalPrice}₺</S.ChoisedPrieceValue>
        </S.ChoisedPrieceContainer>
        <Link to="/success">
        <S.LastOrderButton>Sipariş Ver</S.LastOrderButton>
        </Link>
      </S.PieceDiv>
    </S.Container>
  );
};

export default Note;
