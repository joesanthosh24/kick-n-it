import styled from "styled-components";

export const ColorFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Color = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  margin: 10px 10px 10px 0;
  background-color: ${props => props.backgroundcolor ? props.backgroundcolor: 'gray'};
  cursor: pointer;
`;
