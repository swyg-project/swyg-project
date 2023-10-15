import Question from "./componenets/Question";
import BackBtn from "./componenets/BackBtn";
import Header from "./componenets/Header";
import { useSelector } from "react-redux";
import * as S from "./styled";
const GiftTypeTest = () => {
  return (
    <S.Container>
      <Header />
      <Question />
      <BackBtn />
    </S.Container>
  );
};

export default GiftTypeTest;
