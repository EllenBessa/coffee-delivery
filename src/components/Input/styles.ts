import { styled } from "styled-components";

export const StyledInput = styled.input`
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
