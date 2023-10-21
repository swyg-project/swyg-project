import styled, { css } from "styled-components";

const gridStyle = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 12px;
    grid-column-gap: 12px;
    justify-content: center;
    
    @media ${(props) => props.theme.media.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media ${(props) => props.theme.media.laptop} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

const flexStyle = css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
`;

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - var(--header-height) * 2);
    overflow-y: auto;
    padding-top: 12px;
    padding-left: 6px;

    ${(props) => props.theme.scroll}
    ${(props) => (props.$type === "grid" ? gridStyle : flexStyle)}
`;
