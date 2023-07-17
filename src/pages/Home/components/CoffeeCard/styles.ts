import { styled } from "styled-components";

export const CoffeeCardWrapper = styled.div`
  max-width: 16.5rem;
  padding: 1.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem 2.25rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin-top: -2.625rem;
    margin-bottom: 1rem;
  }

  h3 {
    margin-top: 1.25rem;

    font-family: "Baloo 2", cursive;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
  }

  p {
    margin-top: 0.5rem;

    color: ${(props) => props.theme["base-label"]};
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    line-height: 130%;
  }
`;

export const CoffeeCardTagWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;

    background: ${(props) => props.theme["yellow-light"]};
    border-radius: 6.25rem;
    color: ${(props) => props.theme["yellow-dark"]};
    font-family: "Roboto", sans-serif;
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
  }
`;

export const FooterCoffeeCard = styled.footer`
  margin-top: 2.06rem;

  display: flex;
  align-items: center;

  span {
    margin-right: 1.44rem;

    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;

    strong {
      font-size: 1.4rem;
      font-family: "Baloo 2", cursive;
    }
  }
`;
