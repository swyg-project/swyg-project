import styled, { css } from "styled-components";

const gridStyle = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: calc(100vh - var(--header-height) * 7);
    grid-row-gap: 12px;
    grid-column-gap: 12px;
    justify-content: center;
    
    @media ${(props) => props.theme.media.tablet} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${(props) => props.theme.media.laptop} {
        height: calc(100vh - var(--header-height) * 5);
        grid-template-columns: repeat(4, 1fr);
    }
`;

const flexStyle = css`
    display: flex;
    height: calc(100vh - (var(--header-height) * 3.3));
    flex-direction: column;
    align-self: flex-start;
    gap: 26px;
    align-items: center;
`;

export const Container = styled.div`
    width: 100%;
    overflow-y: auto;
    margin-top: 12px;

    ${(props) => props.theme.scroll}
    ${(props) => (props.$type === "grid" ? gridStyle : flexStyle)}
`;

export const ScrollOverflowHidden = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
`
