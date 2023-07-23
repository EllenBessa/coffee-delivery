import { styled } from "styled-components";

export const SuccessWrapper = styled.main`
  margin-top: 5rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(448px, auto));

  img {
    justify-self: center;
  }
`;

export const AddressList = styled.ul`
  border: 2px solid red;
`;
