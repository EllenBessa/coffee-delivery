import { styled } from "styled-components";

export const SuccessWrapper = styled.main`
  margin-top: 5rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27.875rem, auto));

  > div {
    h1 {
      color: ${(props) => props.theme["yellow-dark"]};
      font-size: 2rem;
      font-family: "Baloo 2", cursive;
    }

    > span {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1.25rem;
      font-family: "Roboto", sans-serif;
    }
  }

  img {
    margin-top: 1rem;

    justify-self: center;
    align-self: end;
  }

  @media (max-width: 450px) {
    margin-top: 1rem;
  }
`;

export const AddressList = styled.ul`
  margin-top: 2.5rem;
  padding: 2.5rem;

  display: grid;
  gap: 2rem;

  position: relative;

  &::before {
    content: "";

    position: absolute;
    inset: 0;

    padding: 1px;
    background: linear-gradient(
      ${(props) => props.theme["yellow"]},
      ${(props) => props.theme["purple"]}
    );
    border-radius: 0.375rem 2.25rem;

    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  li {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-self: flex-start;

    p {
      grid-column: 2;
    }

    span {
      grid-column: 2;
    }

    strong {
      grid-column: 2;
    }
  }

  @media (max-width: 450px) {
    padding: 1.5rem;
    width: fit-content;
  }
`;

export const IconBackground = styled.div`
  grid-row: 1/4;
  align-self: center;

  padding: 0.5rem;
  margin-right: 0.75rem;

  aspect-ratio: 1/1;
  border-radius: 50%;
  background: ${(props) => props.theme["purple"]};
  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;
`;
