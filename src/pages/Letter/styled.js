import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 36px;
    overflow-y: auto;
`;

export const Form = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    gap: 24px;

    label {
        @media (min-width: 350px) {
            font-size: 1.5rem;
        }

        line-height: 1.8rem;
        padding-left: 36px;
        font-size: 1.2rem;
        font-family: ${(props) => props.theme.font.gmarket.light};
        font-weight: 700;
        align-self: flex-start;
    }

    input {
        text-align: center;
        margin-right: 24px;
        border: none;
        background-color: transparent;
        border-bottom: 6px solid #d9dbff;
        font-family: ${(props) => props.theme.font.gmarket.medium};
        width: 40%;
        font-size: 1.2rem;
        display: inline-block;
        align-self: flex-end;
        padding: 8px 12px;
        outline-color: #ffff34;
    }
    
    textarea {
        display: inline-block;
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2) 2px,
            transparent 1px
        );
        background-size: 100% 2.5em;
        line-height: 2.5em;

        min-height: 40vh;
        height: 50%;
        max-width: 70%;
        width: 80%;
        margin-top: 24px;
        outline: none;
        padding: 0.5rem 2rem;
        border: 5px solid #d9dbff;
        border-radius: 10px;
        align-self: center;
        font-family: ${(props) => props.theme.font.gmarket.medium};
        font-size: 1.2rem;
        caret-color: #abaaff;
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
`;
