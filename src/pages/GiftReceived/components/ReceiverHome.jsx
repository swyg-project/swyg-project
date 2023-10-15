// /reciever?giver=주는사람&reciever=받는사람
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../../redux/slices/urlSlice";
import { useSelector } from "react-redux";
import * as S from "../styled";

const ReceiverHome = () => {
  const urlInfo = useSelector((state) => state.url.value);

  return (
    <S.Container>
      <S.GiftName>
        <span>{urlInfo.receiver}</span>
        에게 <span>{urlInfo.sender}</span>(이)가 주는 선물 리스트가
        도착하였습니다!
      </S.GiftName>
      <S.Banner>선물 관련 아이콘, 이모티콘, 그림 등</S.Banner>
    </S.Container>
  );
};
export default ReceiverHome;
