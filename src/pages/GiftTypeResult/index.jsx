import React from "react";
import { resultList } from "../../data/resultList";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styled";

function GiftTestResult() {
  const navigate = useNavigate();
  const mbti = useParams().id;

  //여기서는 mbti별 선물 추천 리스트 보여주기
  const showPresent = () => {
    const giftList = resultList.filter((item) => {
      return item.type === mbti;
    });
    return giftList;
  };
  function shareOriginBtn() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    console.log("URL이 클립보드에 복사되었습니다.");
  }

  const giftList = showPresent();

  return (
    <S.Container>
      <S.TypeBox>
        <div className="title">{giftList[0]?.title}</div>
        <div className="description">{giftList[0]?.description}</div>
      </S.TypeBox>
      <S.GiftBox>
        어울리는 선물
        <S.GiftList>
          {giftList[0].gift.map((gift) => (
            <S.GiftItem key={gift}>{gift}</S.GiftItem>
          ))}
        </S.GiftList>
      </S.GiftBox>

      <S.ResultBtnContainer>
        <button>선물 고르러 가기</button>
        <button onClick={shareOriginBtn}>친구에게 결과 공유하기</button>
        <button onClick={() => navigate("/test")}>다시하기</button>
      </S.ResultBtnContainer>
    </S.Container>
  );
}
export default GiftTestResult;
