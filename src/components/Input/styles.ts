import { styled } from "styled-components";

export const InputWrapper = styled.fieldset`
  all: unset;

  display: grid;
  gap: 0.25rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 2.625rem;

  padding: 0.75rem;

  color: ${(props) => props.theme["base-label"]};
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.75rem;
`;
