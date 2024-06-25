import React, { useState } from "react";
import * as S from "./NoteStyle.js";
import {useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import axios from "axios";

const Note = ({sizeValue,pastryValue, choiseValue,totalPriceValue, checkTotalPrice, setTotalPriceValue }) => {
  const [quantity, setQuantity] = useState(1);
  const price = 85.5;
  
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  let history = useHistory();
  const totalPrice = price * quantity + checkTotalPrice;
  setTotalPriceValue(totalPrice);
  const handlerSumbit = () => {
    history.push("/success");
    axios.post("https://reqres.in/api/pizza", 
      {Size:sizeValue, Pastry:pastryValue, Materials:choiseValue, MaterialPrice:checkTotalPrice, TotalPrice: totalPriceValue}
    ).then((res) => console.log("Veri gönderildi:", res.data))
    .catch((err) => console.error("Hata oluştu:", err));
  }
  return (
    <>
    
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
          <S.ChoisedPrieceLabel PriceColor>Toplam Fiyat</S.ChoisedPrieceLabel>
          <S.ChoisedPrieceValue PriceColor>{totalPrice}₺</S.ChoisedPrieceValue>
        </S.ChoisedPrieceContainer>
        
          <S.LastOrderButton onClick={handlerSumbit}>
            Sipariş Ver
          </S.LastOrderButton>
      
      </S.PieceDiv>
    </S.Container>
    </>
  );
};

export default Note;