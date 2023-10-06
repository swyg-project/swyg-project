import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    body {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #root {
        max-width: ${props => props.theme.size.tablet};
        flex-grow: 1;
    
        @media ${props => props.theme.media.tablet} {
            max-width: ${props => props.theme.size.laptop};
        }
    }
    
    :root {
        --white-primary: rgb(233,233,233);
        --black-primary: rgb(34,34,34);
    }
`

export default GlobalStyles;