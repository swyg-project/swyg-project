import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const GiftReceived = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const urlInfo = Object.fromEntries(urlParams.entries());
  const jsonProductIdList = urlInfo.productIdList;
  urlInfo.productIdList = JSON.parse(urlInfo.productIdList);

  return (
    <S.Container>
      <S.GiftName>
        <S.NameWrap>
          <div className="receiver-box">
            <S.Name>{urlInfo.receiver}</S.Name>
            <S.Bar />
          </div>
          <span>에게</span>
        </S.NameWrap>
        <S.NameWrap>
          <div className="sender-box">
            <S.Name>{urlInfo.sender}</S.Name>
            <S.Bar />
          </div>
          <span>(이)가 주는 </span>
        </S.NameWrap>
        <S.Text>선물 리스트가 도착하였습니다!</S.Text>
      </S.GiftName>
      <S.Logo
        src={`${
          import.meta.env.VITE_PUBLIC_URL
        }/images/icons/요고어때 로고.svg`}
      />
      <S.Button
        onClick={() =>
          navigate(
            `/pick?sender=${urlInfo.sender}&receiver=${urlInfo.receiver}&letter=${urlInfo.letter}&productIdList=${jsonProductIdList}`
          )
        }
      >
        친구가 고른 선물 리스트 보러가기
      </S.Button>
    </S.Container>
  );
};
export default GiftReceived;
