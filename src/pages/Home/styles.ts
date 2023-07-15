import { styled } from "styled-components";

export const CoffeesSection = styled.section`
  h2 {
    margin-bottom: 3.38rem;

    font-family: "Baloo 2", cursive;
    font-size: 2rem;
    font-weight: 800;
  }
`;

export const CardListsWrapper = styled.div`
  margin-bottom: 9.81rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  place-items: center;
  gap: 2.5rem;
`;
