import { styled } from "styled-components";

export const CheckoutWrapper = styled.main`
  display: grid;
  grid-template-columns: 2fr 1.2fr;
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const CheckoutFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.94rem;

  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

export const AddressFormWrapper = styled.form`
  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  @media (max-width: 1200px) {
    padding: 1.6rem;
  }

  > div {
    display: grid;
    grid-template-columns: 2rem auto;
    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }

    span {
      grid-column: 2;

      margin-bottom: 0.18rem;

      color: ${(props) => props.theme["base-subtitle"]};
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
    }

    p {
      grid-column: 2;

      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
    }
  }
`;

export const FinalizationOfPaymentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.94rem;

  h2 {
    font-family: "Baloo 2", cursive;
    font-size: 1.125rem;
  }
`;

export const FinalizationOfPayment = styled.div`
  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;

  @media (max-width: 1200px) {
    padding: 1.5rem;
  }

  ul {
    margin-top: 1.6rem;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    li {
      display: flex;
      justify-content: space-between;

      strong {
        font-family: "Roboto", sans-serif;
        font-size: 1.25rem;
      }
    }
  }
`;

export const ConfirmOrderButton = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;
  margin-top: 1.5rem;

  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
