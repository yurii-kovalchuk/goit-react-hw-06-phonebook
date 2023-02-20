import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  margin-top: 10px;
  width: 200px;
  &:focus-visible {
    outline-color: blue;
  }
`;
