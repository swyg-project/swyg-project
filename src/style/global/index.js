import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import GmarketSansTTFBold from "../../fonts/GmarketSansTTFBold.ttf";
import GmarketSansTTFMedium from "../../fonts/GmarketSansTTFMedium.ttf";
import GmarketSansTTFLight from "../../fonts/GmarketSansTTFLight.ttf";

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'GmarketSansTTFBold';
        src: local('GmarketSansTTFBold'), local('GmarketSansTTFBold');
        font-style: normal;
        src: url(${GmarketSansTTFBold}) format('truetype');
    }

    @font-face {
        font-family: 'GmarketSansTTFMedium';
        src: local('GmarketSansTTFMedium'), local('GmarketSansTTFMedium');
        font-style: normal;
        src: url(${GmarketSansTTFMedium}) format('truetype');
    }

    @font-face {
        font-family: 'GmarketSansTTFLight';
        src: local('GmarketSansTTFLight'), local('GmarketSansTTFLight');
        font-style: normal;
        src: url(${GmarketSansTTFLight}) format('truetype');
    }

    body {
        font-family: GmarketSansTTFLight, sans-serif, Arial;
        background: linear-gradient(#9FAAFF, #DAAAFF);
        position: relative;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
    }
    
    #root {
        height: 100vh;
        overflow: hidden;
        /* max-height: calc(100vh - var(--header-height)); */
        max-width: ${(props) => props.theme.size.tablet};
        align-self: stretch;
        flex-grow: 1;
    
        @media ${(props) => props.theme.media.tablet} {
            max-width: ${(props) => props.theme.size.laptop};
        }
    }
    
    :root {
        --header-height: 50px;
        --white-primary: rgb(233,233,233);
        --black-primary: rgb(34,34,34);
    }
`;

export default GlobalStyles;
