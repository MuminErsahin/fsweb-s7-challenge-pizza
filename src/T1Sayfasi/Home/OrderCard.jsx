import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as S from "./OrderCardStyle.js"


const OrderCard = () => {
  return (
    <>
      <S.Container>
        <S.CardContainer>
          <S.LargeCard>
            <S.LargeTitle>Özel</S.LargeTitle>
            <S.LargeTitle>Lezzetusk</S.LargeTitle>
            <S.Description>Position:Absolute Acı Burger.</S.Description>
            {/* Link ile "/orderpizza" sayfasına yönlendirme */}
            <Link to="/orderpizza">
              <S.OrderButton>Sipariş Ver</S.OrderButton>
            </Link>
          </S.LargeCard>
          <S.MediumAndSmallCardsContainer>
            <S.MediumCard>
              <S.MediumTitle>Hackathlon</S.MediumTitle>
              <S.MediumTitle>Burger Menü</S.MediumTitle>
              {/* Link ile "/orderpizza" sayfasına yönlendirme */}
              <Link to="/orderpizza">
                <S.OrderButton>Sipariş Ver</S.OrderButton>
              </Link>
            </S.MediumCard>
            <S.SmallCard>
              <S.Yanyana>
                <S.SmallTitle highlightsRed >Çoooook </S.SmallTitle>
                <S.SmallTitle>hızlı</S.SmallTitle>
              </S.Yanyana>
              <S.SmallTitle>npm gibi kurye</S.SmallTitle>
              {/* Link ile "/orderpizza" sayfasına yönlendirme */}
              <Link to="/orderpizza">
                <S.OrderButton>Sipariş Ver</S.OrderButton>
              </Link>
            </S.SmallCard>
          </S.MediumAndSmallCardsContainer>
        </S.CardContainer>
      </S.Container>
      <S.MottoDiv>
        <S.Italic>en çok paketlenen menüler</S.Italic>
        <S.Motto>Acıktıran Kodlara Doyuran Lezzetler</S.Motto>
      </S.MottoDiv>
    </>
  );
};

export default OrderCard;
