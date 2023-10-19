import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: ${(props) => (props.$type === "grid" ? "column" : "row")};
    align-items: center;
    background-color: #f7c5cf;
    margin: 1rem 1rem;
    gap: 12px;

    cursor: pointer;
`;

export const AddToCartBtn = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${props => props.$isincart ? "red" : "white"};

    cursor: pointer;
    
    span {
        color: ${props => props.$isincart ? "white" : "black"};
    }

    &:hover {
        filter: brightness(90%);
    }
`

export const ImageWrapper = styled.img`
    display: block;
    flex-basis: ${(props) => (props.$type === "grid" ? "15" : "5")};
    background-color: grey;

    object-fit: contain;
`;

export const Details = styled.div`
    flex-basis: 5;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .product__detail__title {
        font-size: 1.2rem;
        font-weight: 500;
    }

    .product__detail__price {
        font-size: 0.9rem;
    }
`;
