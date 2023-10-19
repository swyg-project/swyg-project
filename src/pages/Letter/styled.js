import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 24px 36px;
`

export const Form = styled.form`
    /* position: relative; */
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex-basis: 4;
    gap: 24px;

    label {
        font-size: 1.5rem;
        font-weight: bold;
    }

    input {
        width: 60%;
        font-size: 1.2rem;
        display: inline-block;
        align-self: flex-end;
        padding: 8px 12px;
    }

    textarea {
        width: 100%;
        align-self: stretch;
        flex-grow: 1;
    }

    button {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 0px;
        left: 0px;
        bottom: 0px;

        width: 100%;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }

    .button-container {
        /* position: relative; */
        display: flex;
        width: 100%;
    }
`