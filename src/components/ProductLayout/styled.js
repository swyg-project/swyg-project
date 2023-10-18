import styled, {css} from "styled-components";

const gridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 12px;
  grid-column-gap: 12px;
`;

const flexStyle = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Container = styled.div`
    ${props => (props.$type === 'grid' ? gridStyle : flexStyle)}
`;
