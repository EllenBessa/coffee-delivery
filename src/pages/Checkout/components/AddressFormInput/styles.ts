import { styled } from "styled-components";

export const AddressFormWrapper = styled.form`
  width: 100%;

  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  gap: 1rem;

  .cep {
    grid-column: span 1;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  input {
    padding: 0.75rem;

    color: ${(props) => props.theme["base-label"]};
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-button"]};
    border-radius: 4px;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
  }
`;
