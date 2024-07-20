import React from "react";
import { FaTwitter } from "react-icons/fa";
import * as S from "./FooterStyle.js"


function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterFirstDiv>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          
          <S.Address style={{ width: "360px", height: "263.56px" }}>
            <img
              src="./Assets/mile2-aseets/footer/logo-footer.svg"
              style={{ width: "50%" }}
            />
            <S.AddressSpan>
              <img src="./Assets/mile2-aseets/footer/icons/icon-1.png" />
              <p>341 Londonderry Road, Istanbul Türkiye</p>
            </S.AddressSpan>
            <S.AddressSpan>
              <img src="./Assets/mile2-aseets/footer/icons/icon-2.png" />
              <p>aciktim@teknolojikyemekler.com</p>
            </S.AddressSpan>
            <S.AddressSpan>
              <img src="./Assets/mile2-aseets/footer/icons/icon-3.png" />
              <p>+90 216 123 45 67</p>
            </S.AddressSpan>
          </S.Address>
          <div className="footer-pizza-hot">
            <p
              style={{
                fontWeight: "500",
                fontSize: "24px",
                lineHeight: "32.11px",
                marginBottom: "40px",
              }}
            >
              Hot Menu
            </p>
            <S.FooterMenu>
              <S.FooterMenuItem>Terminal Pizza</S.FooterMenuItem>
              <S.FooterMenuItem>5 Kişilik Hackathon Pizza</S.FooterMenuItem>
              <S.FooterMenuItem>useEffect Tavuklu Pizza</S.FooterMenuItem>
              <S.FooterMenuItem>Beyaz Console Frosty</S.FooterMenuItem>
              <S.FooterMenuItem>Testler Geçti Mutlu Burger</S.FooterMenuItem>
              <S.FooterMenuItem>Position Absolute Acı Burger</S.FooterMenuItem>
            </S.FooterMenu>
          </div>
        </div>
        <S.InstagramDiv style={{ width: "50%" }} className="instagram-div">
          <S.Instagram>
            <S.InstagramText>Instagram</S.InstagramText>
            <S.InstagramImage src="./Assets/mile2-aseets/footer/insta/li-0.png" />
            <S.InstagramImage src="./Assets/mile2-aseets/footer/insta/li-1.png" />
            <S.InstagramImage src="./Assets/mile2-aseets/footer/insta/li-2.png" />
            <S.InstagramImage src="./Assets/mile2-aseets/footer/insta/li-3.png" />
            <S.InstagramImage src="./Assets/mile2-aseets/footer/insta/li-4.png" />
            <S.InstagramImage src="./Assets/mile2-aseets/footer/insta/li-5.png" />
          </S.Instagram>
        </S.InstagramDiv>
      </S.FooterFirstDiv>
      <S.FooterLastDiv>
        <S.Copyright>
          <p>© 2023 Teknolojik Yemekler.</p>
          <p>
            <FaTwitter />
          </p>
        </S.Copyright>
      </S.FooterLastDiv>
    </S.FooterContainer>
  );
}

export default Footer;
