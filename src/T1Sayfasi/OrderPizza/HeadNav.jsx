import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from "./HeadNavStyle.js"



const HeadNav = () => {
  return (
    <S.Nav>
      <S.NavItem      >
        <S.Icon src="./public/Assets/mile2-aseets/icons/1.svg" alt="Ramen Icon" />
        YENİ! Kore
      </S.NavItem>
      <S.NavItem>
        <S.Icon src="./public/Assets/mile2-aseets/icons/2.svg" alt="Pizza Icon" />
        Pizza
      </S.NavItem>
      <S.NavItem>
        <S.Icon src="./public/Assets/mile2-aseets/icons/3.svg" alt="Burger Icon" />
        Burger
      </S.NavItem>
      <S.NavItem>
        <S.Icon src="./public/Assets/mile2-aseets/icons/4.svg" alt="Fast Food Icon" />
        Fast Food
      </S.NavItem>
      <S.NavItem>
        <S.Icon src="./public/Assets/mile2-aseets/icons/5.svg" alt="Soft Drinks Icon" />
        Soft Drinks
      </S.NavItem>
    </S.Nav>
    
  );
};

export default HeadNav;
