import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    padding-top: var(--header-height);
`;

export const FixedWrapper = styled.div`
    position: sticky;
    flex-grow: 1;
    display: flex;
    align-items: center;
`;

export const BackArrow = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 32px;

    cursor: pointer;
`;

export const Cart = styled(Link)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 32px;

    cursor: pointer;
`;

export const CategoryTitle = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-family: ${props => props.theme.font.gmarket.medium};
    flex-grow: 1;
    justify-self: center;
`;
