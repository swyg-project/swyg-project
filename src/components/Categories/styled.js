import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: fit-content;
    display: flex;
    justify-content: center;
`

export const CategoryLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 16px;
`