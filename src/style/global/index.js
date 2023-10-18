import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    body {
        position: relative;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
    }
    
    #root {
        max-width: ${props => props.theme.size.tablet};
        align-self: stretch;
        flex-grow: 1;
    
        @media ${props => props.theme.media.tablet} {
            max-width: ${props => props.theme.size.laptop};
        }
    }
    
    :root {
        --header-height: 75px;
        --white-primary: rgb(233,233,233);
        --black-primary: rgb(34,34,34);
    }
`

export default GlobalStyles;