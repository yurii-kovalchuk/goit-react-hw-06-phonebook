import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormWrapper = styled(Form)`
padding: 10px;
border 2px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const Input = styled(Field)`
  margin-top: 5px;
  width: 200px;
  &:focus-visible {
    outline-color: blue;
  }
`;

export const Btn = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  border: 1px solid;

  &:active {
    background-color: yellow;
  }
`;
