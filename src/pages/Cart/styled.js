import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const ButtonContainer = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0px;
    right: -2rem;
    width: 100%;
    padding: 12px 24px;
    gap: 12px;

    button {
        width: 100%;
        background-color: grey;
        font-size: 2rem;
        border-radius: 8px;
        
        &:hover {
            filter: brightness(90%);
            cursor: pointer;
        }
    }
`