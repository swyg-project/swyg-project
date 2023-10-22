import Question from "./componenets/Question";
import BackBtn from "./componenets/BackBtn";
import TypeTestHeader from "../../components/TypeTestHeader";
import { useSelector } from "react-redux";
import * as S from "./styled";
const GiftTypeTest = () => {
  return (
    <S.Container>
      <TypeTestHeader />
      <Question />
      <BackBtn />
    </S.Container>
  );
};

export default GiftTypeTest;
