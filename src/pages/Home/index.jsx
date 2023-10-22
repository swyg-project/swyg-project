import logoImg from "../../assets/요고어때 로고.png";
import giftListImg from "../../assets/요고어때 선물 리스트.png";
import typeTestImg from "../../assets/요고어때 유형 테스트.png";
import * as S from "./styled";

const Home = () => {
    const handleOnLinkShare = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("URL이 복사되었습니다! 친구들과 공유해보세요!");
    }
    return (
        <S.Container>
            <S.Banner>
                <div className="banner-logo">
                    <img src={logoImg} alt="logo" />
                </div>
                <div className="banner-message">
                    마음을 담아<br></br>선물을 골라보세요!
                </div>
            </S.Banner>
            <S.Intersaction>
                <S.IntersactionLink to={"/list"}>
                    <img src={giftListImg} alt="gifg list icon" />
                    <div className="intersction-btn">
                        선물 리스트<br></br>만들러 가기
                    </div>
                </S.IntersactionLink>
                <S.IntersactionLink to={"/test"}>
                    <img src={typeTestImg} alt="gifg list icon" />
                    <div className="intersction-btn">
                        유형 테스트로<br></br>선물 추천받기
                    </div>
                </S.IntersactionLink>
            </S.Intersaction>
            <S.Share>
                <button type="button" onClick={handleOnLinkShare}>링크 공유하기</button>
            </S.Share>
        </S.Container>
    );
};

export default Home;
