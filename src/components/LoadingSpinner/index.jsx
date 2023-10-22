import spinnerSVG from "../../assets/Spinner.svg";
import * as S from "./styled";

function LoadingSpinner() {
    return (
        <S.Container>
            <img src={spinnerSVG} alt="loading spinner" />
        </S.Container>
    );
}

export default LoadingSpinner;
