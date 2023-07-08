import { styled } from "styled-components";

export const IntroWrapper = styled.div`
  margin-top: 5.75rem;
  margin-bottom: 5.75rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;

  img {
    margin-left: 180px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    margin-top: 1rem;

    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
  }
`;

export const Topics = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

interface IconBackgroundColorProps {
  iconBackground: "yellow-dark" | "base-text" | "purple" | "yellow";
}

export const IconBackground = styled.strong<IconBackgroundColorProps>`
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background: ${(props) => props.theme[props.iconBackground]};
  color: ${(props) => props.theme.white};
`;
