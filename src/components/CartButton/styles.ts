import { styled } from "styled-components";

export const BaseCartButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.375rem;

  border: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
`;

export const HeaderCartButton = styled(BaseCartButton)`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  position: relative;

  span {
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
    background: ${(props) => props.theme["yellow-dark"]};
    border-radius: 50%;

    height: 1.25rem;
    width: 1.25rem;
    position: absolute;
    top: -12px;
    right: -8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
