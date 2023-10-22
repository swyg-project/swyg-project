import shortenUrl from "../../utils/shortenUrl";
import GiftList from "../../components/GiftList";
import * as S from "./styled";
import { useState } from "react";
import BackHeader from "../../components/BackHeader";

const GiftPick = () => {
    const [finalList, setFinalList] = useState([]);

    const urlParams = new URLSearchParams(window.location.search);
    const urlInfo = Object.fromEntries(urlParams.entries());

    const handleFinalListChange = (newList) => {
        setFinalList(newList);
    };

    const jsonFinalList = JSON.stringify(finalList);
    const originalUrl = `${import.meta.env.VITE_PUBLIC_URL}/last?sender=${
        urlInfo.sender
    }&receiver=${urlInfo.receiver}&productId=${jsonFinalList}`;
    async function handleBtn() {
        if (finalList.length > 0) {
            try {
                const newUrl = await shortenUrl(originalUrl);

                await navigator.clipboard.writeText(newUrl);
                alert("링크가 복사되었습니다.");
            } catch (error) {
                console.error("URL을 복사하는 중 오류가 발생했습니다.", error);
            }
        } else {
            alert("상품을 선택해주세요!");
        }
    }

    return (
        <S.Container>
            <BackHeader />
            <S.LetterWrap>
                <S.LetterPaper>
                    <S.LetterUnderlined>
                        <div className="letter">{urlInfo.letter} </div>
                    </S.LetterUnderlined>
                </S.LetterPaper>
            </S.LetterWrap>
            <S.ProductList>
                <div className="text">마음에 드는 선물을 골라주세요!</div>
                <S.ProductBox>
                    <GiftList
                        onFinalListChange={handleFinalListChange}
                        productIdList={urlInfo.productIdList}
                    ></GiftList>
                </S.ProductBox>
            </S.ProductList>
            <S.Button>
                <button onClick={handleBtn} className="share-btn">
                    친구에게 고른 선물 알려주세요
                </button>
            </S.Button>
        </S.Container>
    );
};
export default GiftPick;
