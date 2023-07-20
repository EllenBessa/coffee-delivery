import { styled } from "styled-components";

export const PaymentMethodButtonStyling = styled.button`
  padding: 1rem;

  border: 0;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${(props) => props.theme["base-button"]};
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    background: ${(props) => props.theme["purple-light"]};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`;
