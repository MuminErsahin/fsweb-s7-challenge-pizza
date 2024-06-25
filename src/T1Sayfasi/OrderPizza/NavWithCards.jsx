import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // react-router-dom'dan Link bileşenini dahil ediyoruz
import foodsData from "../footsData";
import HeadNav from "../OrderPizza/HeadNav";
import OrderCard from "../Home/OrderCard";
import Footer from "../Footer";
import * as S from "./NavWithCardsStyle.js"


const NavWithCards = () => {
  const [activeNavItem, setActiveNavItem] = useState("Pizza"); // İlk başta "Pizza" kategorisi aktif

  // Fareyle üzerine gelindiğinde aktif yiyecek kategorisini değiştirme
  const handleNavItemHover = (title) => {
    setActiveNavItem(title);
  };

  // Aktif yiyecek kategorisine göre kartları render etme
  const renderCards = () => {
    const category = foodsData.find((food) => food.title === activeNavItem);
    if (category && category.items) { 
      return category.items.map((item, index) => (
        <Link  key={index} to="/orderpizza" style={{ textDecoration: "none" }}>
          <S.Card>
            <S.Photo src={item.image} alt={item.title} />
            <S.Title>{item.title}</S.Title>
            <S.Details>
              <S.Price>{item.price}</S.Price>
              <S.Rating>{item.rating}</S.Rating>
              <S.Rating>({item.numReviews})</S.Rating>
            </S.Details>
          </S.Card>
        </Link>
      ));
    }
    return null;
  };

  return (
    <>
      <S.NoneDiv>
      <HeadNav />
      </S.NoneDiv>
      <OrderCard />
      <S.Container>
        <S.ContentContainer>
          {/* Yiyecek kategorileri için navigasyon */}
          <S.Nav>
            {foodsData.map((food, index) => (
              <S.NavItem
                key={index}
                isActive={activeNavItem === food.title}
                onMouseEnter={() => handleNavItemHover(food.title)}
              >
                <S.Icon
                  src={`./Assets/mile2-aseets/icons/${index + 1}.svg`}
                  alt={`${food.title} Icon`}
                />
                {food.title}
              </S.NavItem>
            ))}
          </S.Nav>
          {/* Kartları render et */}
          <S.CardContainer>{renderCards()}</S.CardContainer>
        </S.ContentContainer>
      </S.Container>
      <Footer />
    </>
  );
};

export default NavWithCards;
