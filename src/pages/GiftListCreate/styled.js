import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ScrollButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
    opacity: 0;
    visibility: hidden;
    
    &.show-btn {
        opacity: 1;
        visibility: visible;
    }
`;