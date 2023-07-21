import { ComponentProps } from "react";

import { StyledInput } from "./styles";

type InputProps = ComponentProps<"input">;

export function Input({ ...props }: InputProps) {
  return <StyledInput {...props} />;
}
