import { styled } from "styled-components";

export const AddressFormWrapper = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  gap: 1rem;

  div {
    grid-column: span 2;

    position: relative;

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

    fieldset {
      width: 100%;
    }
  }

  fieldset:nth-child(1) {
    grid-column: span 1;
  }

  fieldset:nth-child(2) {
    grid-column: span 3;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;

    div {
      grid-column: unset;
    }

    fieldset:nth-child(1) {
      grid-column: unset;
    }

    fieldset:nth-child(2) {
      grid-column: unset;
    }
  }
`;
