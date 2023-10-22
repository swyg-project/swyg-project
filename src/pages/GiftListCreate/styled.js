import styled from "styled-components";

export const Container = styled.div`
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
    overflow: hidden;
    height: calc(100vh - var(--header-height) * 2);
`;

export const ScrollButton = styled.button`
    position: fixed;
    bottom: 50px;
    right: 50vh;
    z-index: 9999;
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
    opacity: 0;
    visibility: hidden;

    &.show-btn {
        opacity: 1;
        visibility: visible;
    }
`;
