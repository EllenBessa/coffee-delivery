import { styled } from "styled-components";

export const BaseCartButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.375rem;

  border: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
`;

interface CartButtonWrapperProps {
  variant: "header" | "card";
}

export const CartButtonWrapper = styled(BaseCartButton)<CartButtonWrapperProps>`
  position: relative;

  background: ${(props) =>
    props.variant === "header"
      ? props.theme["yellow-light"]
      : props.theme["purple-dark"]};

  color: ${(props) =>
    props.variant === "header"
      ? props.theme["yellow-dark"]
      : props.theme.white};

  transition: 0.2s;

  &:hover {
    background: ${(props) => props.variant === "card" && props.theme.purple};
  }

  span {
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
    background: ${(props) => props.theme["yellow-dark"]};
    border-radius: 50%;

    height: 1.25rem;
    width: 1.25rem;
    position: absolute;
    top: -8px;
    right: -8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
