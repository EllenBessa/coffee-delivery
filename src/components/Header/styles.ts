import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
      padding: 0.5rem;

      background: ${(props) => props.theme["purple-light"]};
      color: ${(props) => props.theme["purple-dark"]};
      border-radius: 0.375rem;

      display: flex;
      align-items: center;
      gap: 4px;

      span {
        font-size: 0.875rem;
      }
    }
  }
`;
