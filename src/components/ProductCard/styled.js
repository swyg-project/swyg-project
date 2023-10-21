import styled from "styled-components";

export const Container = styled.div`
    width: 47vw;
    display: flex;
    flex-direction: ${(props) => (props.$type === "grid" ? "column" : "row")};
    align-items: center;
    background-color: transparent; //#f7c5cf;
    gap: 12px;
    padding: 0px 2px;
    cursor: pointer;

    @media ${(props) => props.theme.media.tablet} {
        max-width: 31.3vw;
    }

    @media ${(props) => props.theme.media.laptop} {
        width: 200px;
    }

`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-grow: 1;
    border-radius: 10px;
    box-shadow: 0 0 1px 0;
    overflow: hidden;
    background-color: #fff;

    .gift_image {
        width: 100%;
        height: transparent;
        object-fit: contain;
    }

    .gradient_block {
        position: absolute;
        width: 100%;
        height: 30%;
        top: 95%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(
            to top,
            rgba(50, 50, 50, 0.9),
            rgba(50, 50, 50, 0)
        );
        z-index: 0;
    }
`;

export const Details = styled.div`
    max-width: 100%;
    display: block;
    align-items: end;

    .product__detail__title {
        width: transparent;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: ${(props) => props.theme.font.gmarket.light};
        font-weight: 700;
    }

    .product__detail__price {
        font-size: 0.9rem;
    }
`;

export const AddToCartBtn = styled.button`
    position: absolute;
    bottom: 5%;
    right: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    z-index: 10;

    cursor: pointer;

    img {
        filter: ${props => props.$isInCart ? "drop-shadow(0 0 3px black)" : "drop-shadow(0 0 3px red)"}
    }

    &:hover {
        filter: brightness(90%);
    }
`;
