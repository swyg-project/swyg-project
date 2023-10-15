import { useSelector } from "react-redux";
import shortenUrl from "../../../utils/shortenUrl";

import * as S from "../styled";
const ReceiverPick = () => {
  const urlInfo = useSelector((state) => state.url.value);
  //여기서는 productId만 url로 전송하면됨
  const testProductId = 12345;
  const originalUrl = `http://localhost:5173/last?productId=${testProductId}`;
  async function handleBtn() {
    try {
      const newUrl = await shortenUrl(originalUrl);
      console.log(newUrl);
      // 복사 기능 실행
      await navigator.clipboard.writeText(newUrl);
      console.log("URL이 클립보드에 복사되었습니다.");
    } catch (error) {
      console.error("URL을 복사하는 중 오류가 발생했습니다.", error);
    }
  }

  return (
    <S.Container>
      <S.Letter>{urlInfo.letter}</S.Letter>

      <S.ProductList>
        마음에 드는 선물을 골라주세요!
        {urlInfo.productId}
      </S.ProductList>
      <S.Button onClick={handleBtn}>친구에게 고른 선물 알려주세요</S.Button>
    </S.Container>
  );
};
export default ReceiverPick;
