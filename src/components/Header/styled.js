import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
`

export const FixedWrapper = styled.div`
    position: sticky;
    flex-grow: 1;
    display: flex;
    align-items: center;
`

export const Logo = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 12px;

    cursor: pointer;
`

export const Options = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    padding-right: 12px;

    cursor: pointer;
`