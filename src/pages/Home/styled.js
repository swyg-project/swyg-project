import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100vw;
    height: 100vh;
`;

export const Banner = styled.div`
    margin: 5vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    .banner {
        padding: 5vh 0px;

        /* FIXME: 와이어 프레임 */
        background-color: rgba(0, 0, 0, 0.3);
        text-align: center;
        font-size: 1.4rem;
        font-weight: bold;
        line-height: 1.6rem;
    }

    .banner-message {
        text-align: center;
        padding: 5vh 0px;

        /* FIXME: 와이어 프레임 */
        font-size: 2rem;
        font-weight: bold;
        line-height: 2.2rem;
    }
`;

export const Intersaction = styled.div`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;

    /* FIXME: 와이어 프레임 */
    button {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
    }
`;

export const Share = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5vh 0px;

    /* FIXME: 와이어 프레임 */
    button {
        padding: 6px 24px;
        font-size: 1.2rem;
    }
`
