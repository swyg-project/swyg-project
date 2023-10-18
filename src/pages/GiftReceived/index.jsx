// /reciever?giver=주는사람&reciever=받는사람
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/urlSlice";
import ReceiverHome from "./components/ReceiverHome";
import * as S from "./styled";

const GiftReceived = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  let urlInfo = {};
  const dispatch = useDispatch();
  const entries = urlParams.entries();

  for (const entry of entries) {
    urlInfo = { ...urlInfo, [entry[0]]: entry[1] };
  }

  useEffect(() => {
    dispatch(add(urlInfo));
  }, [urlInfo]);
  return (
    <S.Container>
      <S.Container>
        <ReceiverHome />
        <S.Button onClick={() => navigate("/pick")}>
          친구가 고른 선물 리스트 보러가기
        </S.Button>
      </S.Container>
    </S.Container>
  );
};
export default GiftReceived;
