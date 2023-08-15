import { styled } from "styled-components";

export const PaymentMethodWrapper = styled.div`
  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};

  border-radius: 6px;

  display: flex;
  flex-direction: column;

  div:first-child {
    display: grid;
    grid-template-columns: 2rem auto;

    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme["purple-dark"]};
    }

    span {
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
    }

    p {
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;

      grid-column: 2;
    }
  }

  div:last-child {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  @media (max-width: 1200px) {
    div:last-child {
      grid-template-columns: 1fr;
    }
  }
`;
