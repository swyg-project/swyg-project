import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    padding-top: 12px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 6px;

    @media ${(props) => props.theme.media.laptop} {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media ${(props) => props.theme.media.tablet} {
        padding: 16px 0px;
    }
`;

export const CategoryLink = styled(Link)`
    all: unset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px;
    gap: 6px;

    @media (min-width: 400px) {
        padding: 8px;
    }

    span {
        font-family: GmarketSansTTFLight;
        font-weight: 700;
        font-size: 0.6rem;

        @media (min-width: 400px) {
            display: inline-block;
            font-size: 1rem;
        }
    }

    .img_container {
        box-shadow: 0 0 1px 0;
        flex-shrink: 1;
        overflow: hidden;
        width: 50px;
        height: 50px;
        border-radius: 20px;
        background-color: white;

        @media (min-width: 400px) {
            width: 62px;
            height: 62px;
            border-radius: 25px;
        }
    
        @media ${(props) => props.theme.media.tablet} {
            width: 75px;
            height: 75px;
            border-radius: 30px;
        }
    }

    img {
        width: 100%;
        height: 100%;
    }
`;
