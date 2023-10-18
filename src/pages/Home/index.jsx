import * as S from "./styled";

const Home = () => {
    return (
        <S.Container>
            <S.Banner>
                <div className="banner">
                    선물 관련 아이콘,<br></br>이모티콘, 그림 등
                </div>
                <div className="banner-message">
                    마음을 담아<br></br>선물을 골라보세요!
                </div>
            </S.Banner>
            <S.Intersaction>
                <S.IntersactionLink to={"/list"}>
                    선물 리스트<br></br>만들러 가기
                </S.IntersactionLink>
                <S.IntersactionLink to={"/test"}>
                    유형 테스트로<br></br>선물 추천받기
                </S.IntersactionLink>
            </S.Intersaction>
            <S.Share>
                <button>링크 공유하기</button>
            </S.Share>
        </S.Container>
    );
};

export default Home;
