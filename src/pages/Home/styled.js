import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;

    height: calc(100% - var(--header-height));
`;

export const Banner = styled.div`
    margin: 5vh 5vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    .banner-logo {
        padding-top: 5vh;
        text-align: center;
    }

    .banner-message {
        text-align: center;
        padding-bottom: 5vh;
        color: #ffffff;

        font-family: GmarketSansTTFMedium, sans-serif, Arial;
        font-size: 25px;
    }
`;

export const Intersaction = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10vh;
    
    @media ${props => props.theme.media.tablet} {
        gap: 3rem;
    }
`;

export const Share = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
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
        cursor: pointer;

        &:hover {
            filter: brightness(90%);
        }
    }
`;

export const IntersactionLink = styled(Link)`
    all: unset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0px 12px;

    .intersction-btn {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 1.5rem;

        font-family: GmarketSansTTFMedium, sans-serif, Arial;
        font-size: 17px;
        color: #484c99;

        border-color: #d9dbff;
        border-width: 5px;
        border-style: solid;
        border-radius: 10px;

        filter: drop-shadow(0px 0px 3px #d9dbff);

        background: #ffffff;

        user-select: none;

    }

    &:hover {
        filter: brightness(90%);
    }
    cursor: pointer;
`;
