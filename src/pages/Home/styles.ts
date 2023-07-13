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
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
`;
