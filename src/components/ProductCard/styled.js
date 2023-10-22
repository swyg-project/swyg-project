import styled, { css } from "styled-components";

const gridStyle = css`
    width: 47vw;
    flex-direction: column;
    background-color: transparent;
    padding: 0px 2px;

    @media ${(props) => props.theme.media.tablet} {
        max-width: 31.3vw;
    }

    @media ${(props) => props.theme.media.laptop} {
        width: 200px;
    }
`;

const flexStyle = css`
    width: 80%;
    max-width: 80vw;
    height: fit-content;
    flex-direction: row;
    border: 5px solid #d9dbff;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.5);

    filter: drop-shadow(0px 0px 3px #d9dbff);
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;

    ${(props) => (props.$type === "grid" ? gridStyle : flexStyle)}
`;

export const ImageWrapper = styled.div`
    position: relative;
    display: flex;
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

    ${(props) =>
        props.$type === "grid"
            ? css`
                  width: 100%;
                  flex-grow: 1;
              `
            : css`
                  /* flex-grow: 1; */
                  border-top-right-radius: 0;
                  border-bottom-right-radius: 0;
                  width: 100px;
                  height: 100px;
                  flex-shrink: 0;
                  box-shadow: none;
              `}
`;

export const Details = styled.div`
    ${(props) =>
        props.$type === "grid"
            ? css`
                  max-width: 100%;
                  display: block;
                  align-items: end;
              `
            : css`
                  display: flex;
                  flex-direction: column;
                  flex-basis: 1;
                  overflow: hidden;
                  gap: 12px;
                  padding-right: 2.5rem;
              `}

    .close_button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 15px;
        height: 15px;
    }

    .product__detail__title {
        width: 100%;
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
    z-index: 1;

    cursor: pointer;

    img {
        filter: ${(props) =>
            props.$isInCart
                ? "drop-shadow(0 0 3px black)"
                : "drop-shadow(0 0 3px black)"};
    }

    &:hover {
        filter: brightness(90%);
    }
`;
