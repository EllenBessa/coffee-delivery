import { styled } from "styled-components";

export const FinalizationCard = styled.div`
  margin-top: 1rem;
  padding: 0.5rem 0.25rem 1.5rem 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
    max-width: 4rem;
  }

  strong {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    span {
      margin-bottom: 0.5rem;

      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;

      div {
        display: flex;
      }
    }
  }
`;

export const RemoveButton = styled.button`
  padding: 0.5rem;

  border: 0;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  background: ${(props) => props.theme["base-button"]};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  cursor: pointer;
  transition: 0.2s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
`;
