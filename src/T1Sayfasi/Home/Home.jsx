
import NavWithCards from "../OrderPizza/NavWithCards";
import * as S from "./HomeStyle.js"


function Home() {
  return (
    <>
      <S.Container>
        <S.Title src="../Assets/mile1-assets/logo.svg" />
        <S.Italic>fırsatı kaçırma</S.Italic>
        <S.Motto>KOD ACIKTIRIR</S.Motto>
        <S.Motto>PİZZA,DOYURUR</S.Motto>
        <S.Button to="/orderpizza">ACIKTIM</S.Button>
      </S.Container>
   
      <NavWithCards className="NavWithCards"/>
  
    </>
  );
}

export default Home;
