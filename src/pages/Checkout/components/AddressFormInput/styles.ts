import { styled } from "styled-components";

export const AddressFormWrapper = styled.form`
  width: 100%;

  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  gap: 1rem;

  div {
    grid-column: span 2;

    position: relative;

    input {
      width: 100%;
    }

    span {
      position: absolute;

      color: ${(props) => props.theme["base-label"]};
      font-family: "Roboto", sans-serif;
      font-size: 0.75rem;
      font-style: italic;

      top: 0.85rem;
      right: 0.75rem;
      pointer-events: none;
    }
  }

  input:nth-child(1) {
    grid-column: span 1;
  }

  input:nth-child(2) {
    grid-column: span 3;
  }
`;
