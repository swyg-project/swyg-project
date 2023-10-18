import React, { useEffect } from "react";
import { questionList } from "../../../data/questionList";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calculate } from "../../../utils/calculate";
import { add, del, init } from "../../../redux/slices/scoreSlice";
import * as S from "../styled";

function Question() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지에 들어오면 저장해놓은 값 reset
    dispatch(init());
  }, []);
  const pageNumber = useSelector((state) => state.score.page);
  const scoreList = useSelector((state) => state.score.scoreList);

  const handleClickAnswer = (type) => {
    if (pageNumber < 11) {
      dispatch(add(type));
    } else {
      dispatch(add(type));
      const mbti = calculate(scoreList);
      console.log(mbti);
      navigate(`/result/${mbti}`);
    }
  };

  return (
    <S.TestBox>
      <S.Question>
        {pageNumber >= 0 && pageNumber < 12
          ? questionList[pageNumber].q
          : questionList[0].q}
      </S.Question>
      <S.Answer>
        <div
          className="answer-btn"
          onClick={() => handleClickAnswer(questionList[pageNumber].a[0].type)}
        >
          {pageNumber >= 0 && pageNumber < 12
            ? questionList[pageNumber].a[0].text
            : questionList[0].a[0].text}
        </div>
        <div
          className="answer-btn"
          onClick={() => handleClickAnswer(questionList[pageNumber].a[1].type)}
        >
          {pageNumber >= 0 && pageNumber < 12
            ? questionList[pageNumber].a[1].text
            : questionList[0].a[1].text}
        </div>
      </S.Answer>
    </S.TestBox>
  );
}
export default Question;
