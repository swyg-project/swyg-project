import React, { useEffect } from "react";
import { questionList } from "../../../constants/questionList";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calculate } from "../../../utils/calculate";
import { add, init } from "../../../redux/slices/scoreSlice";
import * as S from "../styled";

function Question() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
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
        <S.AnswerBtn
          onClick={() => handleClickAnswer(questionList[pageNumber].a[0].type)}
        >
          {pageNumber >= 0 && pageNumber < 12
            ? questionList[pageNumber].a[0].text
            : questionList[0].a[0].text}
        </S.AnswerBtn>
        <S.AnswerBtn
          onClick={() => handleClickAnswer(questionList[pageNumber].a[1].type)}
        >
          {pageNumber >= 0 && pageNumber < 12
            ? questionList[pageNumber].a[1].text
            : questionList[0].a[1].text}
        </S.AnswerBtn>
      </S.Answer>
    </S.TestBox>
  );
}
export default Question;
