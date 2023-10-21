import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 36px;
    `

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex-basis: 4;
    align-items: center;
    gap: 24px;
    
    label {
        font-size: 1.5rem;
        font-family: ${props => props.theme.font.gmarket.medium};
        font-weight: bold;
        align-self: flex-start;
    }

    input {
        border: none;
        background-color: transparent;
        border-bottom: 6px solid #D9DBFF;
        font-family: ${props => props.theme.font.gmarket.medium};
        width: 60%;
        font-size: 1.2rem;
        display: inline-block;
        align-self: flex-end;
        padding: 8px 12px;
        outline-color: #FFFF34;
    }

    textarea {
        outline: none;
        padding: 2rem;
        border: 5px solid #D9DBFF;
        border-radius: 10px;
        width: 600px;
        flex-grow: 0.7;
        line-height: 4rem;
        font-family: ${props => props.theme.font.gmarket.medium};
        font-size: 1.2rem;
        caret-color: #ABAAFF;
    }

    button {
        width: fit-content;
        padding: 10px 3rem;

        font-family: GmarketSansTTFLight, sans-serif, Arial;
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
        text-align: center;
        color: #484c99;

        border: none;
        border-bottom: 2px solid #9c76b0;
        border-radius: 10px;

        background: #ffffff;

        user-select: none;
        
        &:hover {
            filter: brightness(90%);
            cursor: pointer;
        }
    }

    .button-container {
        display: flex;
        width: 100%;
        justify-content: center;
    }
`