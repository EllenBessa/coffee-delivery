import styled from "styled-components";

export const FormCoffeeCard = styled.form`
  margin-right: 0.5rem;

  background: ${(props) => props.theme["base-button"]};
  border-radius: 0.38rem;

  display: flex;

  label {
    all: unset;

    padding: 0.5rem 0.25rem;

    text-align: center;
    color: ${(props) => props.theme["base-title"]};
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
  }

  button {
    all: unset;

    padding: 0.5rem 0.5rem;

    color: ${(props) => props.theme.purple};

    cursor: pointer;
    transition: 0.2s;
  }

  button:hover {
    color: ${(props) => props.theme["purple-dark"]};
    background: ${(props) => props.theme["base-hover"]};
    border-radius: 0.38rem;
  }
`;
