import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 10px;
`;

export const Btn = styled.button`
  margin-left: 20px;
  padding: 0 5px;
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  border: 1px solid;

  &:active {
    background-color: blue;
  }
`;
