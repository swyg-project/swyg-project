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
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    body {
        font-family: 'GmarketSansMedium', sans-serif;
        position: relative;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
        
        background: transparent linear-gradient(180deg, var(--lightblue-color) 0%, var(--lavender-color) 100%) 0%
        0% no-repeat padding-box;
        background-attachment: fixed;

    }
    
    #root {
        height: 100vh;
        overflow: auto;
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
        --white-primary: #FFFFFF;
        --black-primary: #000000;

        --lightblue-color: #9FAAFF;
        --lavender-color: #DAAAFF;
        --pale-lavender-color: #D9DBFF;
        --yellow-color: #FFFF34;
        --mauve-color: #9C76B0;
        --navy-color:#484C99

    }
`;

export default GlobalStyles;
