import React from "react";
import * as S from "./SuccessStyle.js"

function Success({ totalPriceValue, checkTotalPrice, choiseValue, sizeValue, pastryValue }) {

  return (
    <>
      <div style={{ background: "#ce2829" }}>
        <S.SucHeader>
          <S.Title src="./Assets/mile1-assets/logo.svg" />
        </S.SucHeader>
        <S.Sarma>
          <S.Italic>lezzetin yolda</S.Italic>
          <S.Mesage>SİPARİŞ ALINDI </S.Mesage>
          <S.Line></S.Line>
          <S.ProductLabel>Position Absolute Acı Pizza</S.ProductLabel>
        </S.Sarma>
        <S.ExplationDiv>
          <S.AtomicDiv>
            <S.LabelExplanation>Boyut:</S.LabelExplanation>
            <S.LabelExplanationValue>{sizeValue}</S.LabelExplanationValue>
          </S.AtomicDiv>
          <S.AtomicDiv>
            <S.LabelExplanation>Hamur:</S.LabelExplanation>
            <S.LabelExplanationValue>{pastryValue}</S.LabelExplanationValue>
          </S.AtomicDiv>
          <S.AtomicDiv>
            <S.LabelExplanation>
              Ek Malzemeler:{choiseValue.join(", ")}
            </S.LabelExplanation>
          </S.AtomicDiv>
        </S.ExplationDiv>
        <S.PriceBordersDiv>
          <S.LabelExplanation>Sipariş Toplamı</S.LabelExplanation>

          <S.OrderValueDiv1>
            <S.ChoiseOrder>Seçimler</S.ChoiseOrder>
            <S.OrderValue1>{checkTotalPrice}₺</S.OrderValue1>
          </S.OrderValueDiv1>
          <S.OrderValueDiv1>
            <S.ChoiseOrder2>Toplam</S.ChoiseOrder2>
            <S.OrderValue2>{totalPriceValue}₺</S.OrderValue2>
          </S.OrderValueDiv1>
        </S.PriceBordersDiv>
        <S.ColorDiv></S.ColorDiv>
      </div>
    </>
  );
}

export default Success;
