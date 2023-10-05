import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    gap: 10vh;
`;
const Title = styled.div`
    display: inline-block;
    color: var(--black-primary);
    font-size: 5rem;
    font-weight: bold;
`;
const SubTitle = styled.div`
margin-top: -5vh;
  display: inline-block;
    color: gray;
    font-size: 3rem;
`
const CounterWrapper = styled.div`
  display: flex;
  gap: 12px;
`
const Counter = styled.button`
    cursor: pointer;
    padding: 4px 12px;
    font-size: 1.2rem;
`;
const Output = styled.p`
    margin-left: 2rem;
    color: var(--black-primary);
    font-size: 2rem;
    font-weight: bold;
`;

function App() {
    const [count, setCount] = useState(0);

    return (
        <Container>
            <Title>스위프 1기 4팀</Title>
            <SubTitle>선물 추천 서비스</SubTitle>
            <CounterWrapper>
                <Counter onClick={() => setCount((old) => old + 1)}>
                    &#43;
                </Counter>
                <Counter onClick={() => setCount((old) => old - 1)}>
                    &minus;
                </Counter>
                <Output>{count}</Output>
            </CounterWrapper>
        </Container>
    );
}

export default App;
