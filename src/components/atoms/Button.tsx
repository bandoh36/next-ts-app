import { Button as MuiButton } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import { styled } from "@mui/system";

export interface StyledButtonProps extends ButtonProps {
  bgColor?: "primary" | string;
}

export const Button = styled(MuiButton, {
  shouldForwardProp: (props) => ["borderType"].every((prop) => prop !== props),
})<StyledButtonProps>();
