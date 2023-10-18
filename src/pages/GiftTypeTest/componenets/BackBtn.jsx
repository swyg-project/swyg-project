import { add, del, init } from "../../../redux/slices/scoreSlice";
import { useDispatch, useSelector } from "react-redux";
import * as S from "../styled";

function BackBtn() {
  const pageNumber = useSelector((state) => state.score.page);
  const scoreList = useSelector((state) => state.score.scoreList);
  const dispatch = useDispatch();

  const handleBackBtn = () => {
    if (pageNumber > 0) {
      dispatch(del());
    } else {
      console.log("첫번째 문항입니다.");
    }
  };

  return (
    <S.BackBtn>
      <button onClick={handleBackBtn}>&lt;</button>
      {pageNumber + 1}/12
    </S.BackBtn>
  );
}
export default BackBtn;
