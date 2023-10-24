import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - var(--header-height) * 2);
    padding-top: 16px;

    .alert-empty {
        display: flex;
        width: 100%;
        height: 80%;
        justify-content: center;
        align-items: center;

        span {
            text-align: center;
            font-size: 2rem;
            font-family: ${props => props.theme.font.gmarket.medium}
        }
    }
`

export const ButtonContainer = styled.div`
    position: sticky;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    bottom: 10px;
    width: 100%;
    gap: 12px;
    z-index: 10;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 10px 3rem;
        
        border: none;
        border-bottom: 2px solid #9c76b0;
        border-radius: 10px;
        
        background: #ffffff;
        
        user-select: none;
        
        span {
            font-family: GmarketSansTTFLight, sans-serif, Arial;
            font-size: 16px;
            font-weight: bold;
            font-style: normal;
            text-align: center;
            color: #484c99;
            display: block;
            flex-shrink: 0;

            @media ${props => props.theme.media.mobile} {
                font-size: 20px;
            }
        }
        
        &:hover {
            filter: brightness(90%);
            cursor: pointer;
        }

        &:disabled {
            filter: brightness(80%);
            cursor: no-drop;
        }
    }
`