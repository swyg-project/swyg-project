import { getItem } from "../../utils/storage";
import { CART } from "../../constants/cart";

import * as S from "./styled";
import shortenUrl from "../../utils/shortenUrl";

const Letter = () => {
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);

            const productCode = getItem(CART, []).map(
                (product) => product.code
            );

            formData.append("productIdList", JSON.stringify(productCode));

            const requestParameter = new URLSearchParams(formData).toString();

            const result = await shortenUrl(import.meta.env.VITE_PUBLIC_URL + '/receiver?' + requestParameter);

            navigator.clipboard
                .writeText(result)
                .then(() =>
                    alert("url이 복사되었습니다! 친구에게 마음을 전달하세요!")
                );
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <S.Container>
            <S.Form onSubmit={handleOnSubmit}>
                <label htmlFor="receiver-name">누구에게 주는 선물인가요?</label>
                <input
                    id="receiver-name"
                    name="receiver"
                    type="text"
                    placeholder="받는 사람 이름"
                    required
                    autoFocus
                />
                <label htmlFor="sender-name">주는 사람은 누구인가요?</label>
                <input
                    id="sender-name"
                    name="sender"
                    type="text"
                    required
                    placeholder="주는 사람 이름"
                />
                <textarea
                    name="letter"
                    required
                    placeholder="마음을 담은 편지를 써보세요!"
                />
                <div className="button-container">
                    <button type="submit">
                        <span>친구에게 보내기</span>
                    </button>
                </div>
            </S.Form>
        </S.Container>
    );
};

export default Letter;
