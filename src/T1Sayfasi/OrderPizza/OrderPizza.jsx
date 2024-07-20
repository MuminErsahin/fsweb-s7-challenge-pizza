import React, { useState } from "react";
import CheckBoxes from "./CheckBoxes";
import SizeCheck from "./SizeCheck";
import Footer from "../Footer";
import Note from "./Note";
import * as S from "./OrderPizzaStyle.js";

function OrderPizza({
  allValue,
  setAllValue,
  setTotalPriceValue,
  totalPriceValue,
  setCheckTotalPrice,
  checkTotalPrice,
  checkedItems,
  setCheckedItems,
  setChoiseValue,
  setPastryValue,
  setSizeValue,
  sizeValue,
  pastryValue,
  choiseValue,
  validation,
  setValidation,
}) {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title src="../Assets/mile1-assets/logo.svg" />
      </S.HeaderContainer>
      <S.HeadNavStyle>
        <S.HeadImg src="../Assets/mile2-aseets/pictures/form-banner.png" />
        <S.NavContainer>
          <S.NavAnasayfa to="/"> Ana Sayfa - </S.NavAnasayfa>
          <S.NavOzet to="/orderpizza"> Sipariş Özeti </S.NavOzet>
        </S.NavContainer>
        <S.ProductName>Position Absolute Acı Pizza</S.ProductName>
        <S.PriceContainer>
          <S.Price>85.50₺</S.Price>
          <S.Raiting>
            <S.Rait>4.9</S.Rait>
            <S.Rait>(200)</S.Rait>
          </S.Raiting>
        </S.PriceContainer>
        <S.Paragraph>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </S.Paragraph>
      </S.HeadNavStyle>
      <SizeCheck
        setAllValue={setAllValue}
        allValue={allValue}
        setPastryValue={setPastryValue}
        setSizeValue={setSizeValue}
      />

      <CheckBoxes
        checkTotalPrice={checkTotalPrice}
        setCheckTotalPrice={setCheckTotalPrice}
        setChoiseValue={setChoiseValue}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        totalPriceValue={totalPriceValue}
        setAllValue={setAllValue}
        allValue={allValue}
        validation={validation}
        setValidation={setValidation}
      />
      <Note
        setTotalPriceValue={setTotalPriceValue}
        setCheckTotalPrice={setCheckTotalPrice}
        checkTotalPrice={checkTotalPrice}
        sizeValue={sizeValue}
        pastryValue={pastryValue}
        choiseValue={choiseValue}
        totalPriceValue={totalPriceValue}
        validation={validation}
      />
      <Footer />
    </S.Container>
  );
}

export default OrderPizza;
