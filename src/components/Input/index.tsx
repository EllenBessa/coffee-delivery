import { ComponentProps, forwardRef } from "react";

import { ErrorMessage, InputWrapper, StyledInput } from "./styles";

interface InputProps extends ComponentProps<"input"> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, Omit<InputProps, "ref">>(
  ({ error, ...props }, ref) => (
    <InputWrapper>
      <StyledInput ref={ref} {...props} />

      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  )
);
