import { del } from "../../../redux/slices/scoreSlice";
import { useDispatch, useSelector } from "react-redux";
import * as S from "../styled";

function BackBtn() {
  const pageNumber = useSelector((state) => state.score.page);
  const dispatch = useDispatch();

  const handleBackBtn = () => {
    if (pageNumber > 0) {
      dispatch(del());
    } else {
      console.log("첫번째 문항입니다.");
    }
  };

  return (
    <S.BackBtnWrap>
      <S.StyledBackButton onClick={handleBackBtn} />
      <S.PageNumber>&#40;{pageNumber + 1}/12&#41; </S.PageNumber>
      <S.StyledEmptyBox />
    </S.BackBtnWrap>
  );
}
export default BackBtn;
